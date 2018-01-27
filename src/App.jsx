import React from 'react';
import converter from 'xml-js';

import Uploader from './components/Uploader';
import Viewer from './components/Viewer/Viewer';
import ParserError from './components/ParserError/ParserError';
import SupportedFileTypes from './components/SupportedFileTypes/SupportedFileTypes';

import normalizeData from './utils/normalizeData';

import styles from './app.scss';

const PARSER_ERROR = 'errors.parserError';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.onFileChange = this.onFileChange.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  onFileChange(e) {
    e.persist();
    this.setState({ errorType: undefined });

    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt) => {
        try {
          const xml = evt.target.result;
          const rawData = converter.xml2js(xml, { compact: true });
          const textData = normalizeData(rawData);

          this.setState({ textData });
        } catch (parsingError) {
          console.error('Failed to read file');
          this.clearData(e, PARSER_ERROR);
        }
      };

      reader.onerror = () => {
        console.error('Failed to read file');
      };
    } else {
      this.clearData(e);
    }
  }

  clearData(event, errorType) {
    this.setState({ errorType, textData: undefined });
    event.target.value = null; // eslint-disable-line no-param-reassign
  }

  render() {
    const { textData, errorType } = this.state;

    const titleText = textData ? 'Here\'s your texts' : 'Hello there, to get started, upload a file';
    const error = errorType === PARSER_ERROR ? <ParserError /> : null;
    const view = textData ? <Viewer textData={textData} clearData={this.clearData} /> : <Uploader onFileChange={this.onFileChange} />;

    return (
      <div className={styles.wrapper}>
        <h1>{titleText}</h1>
        {error}
        {view}
        <SupportedFileTypes />
      </div>
    );
  }
}

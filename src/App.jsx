import React from 'react';
import converter from 'xml-js';

import Uploader from './components/Uploader/Uploader';
import Viewer from './components/Viewer/Viewer';
import ParserError from './components/ParserError/ParserError';

import normalizeData from './utils/normalizeData';

import './base.scss';
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

  clearData(e, errorType) {
    e.preventDefault();
    this.setState({ errorType, textData: undefined });

    e.target.value = null; // eslint-disable-line no-param-reassign
  }

  render() {
    const { textData, errorType } = this.state;

    const subHeadingText = textData ? 'View and save your texts.' : 'To get started, upload an SMS backup file.';
    const error = errorType === PARSER_ERROR ? <ParserError /> : null;
    const view = textData
      ? <Viewer textData={textData} clearData={this.clearData} onFileChange={this.onFileChange} />
      : <Uploader onFileChange={this.onFileChange} />;

    return (
      <div className={styles.wrapper}>
        <h1>Welcome to Text Message Viewer</h1>
        <h4 className={styles.subHeading}>{subHeadingText}</h4>
        {error}
        {view}
      </div>
    );
  }
}

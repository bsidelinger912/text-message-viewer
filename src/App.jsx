/* eslint-env browser */

import React from 'react';
import converter from 'xml-js';

import Uploader from './components/Uploader';
import Viewer from './components/Viewer/Viewer';

import normalizeData from './utils/normalizeData';

import styles from './app.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.onFileChange = this.onFileChange.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  onFileChange(e) {
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt) => {
        const xml = evt.target.result;
        const rawData = converter.xml2js(xml, { compact: true });
        const textData = normalizeData(rawData);

        this.setState({ textData });
      };

      reader.onerror = () => {
        console.error('Failed to read file');
        this.clearData();
      };
    } else {
      this.clearData();
    }
  }

  clearData() {
    this.setState({ textData: undefined });
  }

  render() {
    const { textData } = this.state;

    const titleText = textData ? 'Here\'s your texts' : 'Hello there, to get started, upload a file';
    const view = textData ? <Viewer textData={textData} clearData={this.clearData} /> : <Uploader onFileChange={this.onFileChange} />;

    return (
      <div className={styles.wrapper}>
        <h1>{titleText}</h1>
        {view}
      </div>
    );
  }
}

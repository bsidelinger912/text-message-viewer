/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';

import PDFInstructions from './PDFInstructions';
import UploadForm from '../Uploader/UploadForm';

import styles from './viewer.scss';

const propTypes = {
  textData: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    sentReceived: PropTypes.string.isRequired,
  })).isRequired,
  clearData: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
};

const Viewer = ({ textData, onFileChange, clearData }) => {
  const rows = textData.map((row, i) => (
    <div key={i} className={styles.textItem}>
      <div className={row.sentReceived === 'sent' ? styles.sent : styles.received}>
        <div className={styles.name}>{row.sender}</div>
        <div className={styles.date}>{row.date}</div>
        <div className={styles.body}>{row.body}</div>
      </div>
      <div className={styles.clear} />
    </div>
  ));

  return (
    <div>
      <PDFInstructions />
      <UploadForm onFileChange={onFileChange} clearData={clearData} buttonText="Choose a Different File" />
      {rows}
    </div>
  );
};

Viewer.propTypes = propTypes;

export default Viewer;

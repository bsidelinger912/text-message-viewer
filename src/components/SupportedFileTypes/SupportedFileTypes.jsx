/**
 * @class SupportedFileTypes
 * @description
 */

import React from 'react';

import Contact from '../Contact/Contact';

import styles from './supportedFileTypes.scss';

const SupportedFileTypes = () => (
  <div className={styles.main}>
    <strong>Supported SMS backup Apps:</strong>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestore&hl=en"
          rel="noopener noreferrer"
        >
          SMS backup and restore (Android)
        </a>
      </li>
    </ul>
    <Contact /> us to request support for more Apps.
  </div>
);


export default SupportedFileTypes;

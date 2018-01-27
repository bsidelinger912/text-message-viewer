/**
 * @class SupportedFileTypes
 * @description
 */

import React from 'react';

import Contact from '../Contact/Contact';

import styles from './supportedFileTypes.scss';

const SupportedFileTypes = () => (
  <div className={styles.main}>
    Supported File types:
    <ul>
      <li>
        <a href="https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestore&hl=en">
          SMS backup and restore (Android)
        </a>
      </li>
    </ul>
    <Contact /> us to request more formats.
  </div>
);


export default SupportedFileTypes;

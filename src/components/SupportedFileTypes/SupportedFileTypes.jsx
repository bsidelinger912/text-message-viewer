/**
 * @class SupportedFileTypes
 * @description
 */

import React from 'react';

import Contact from '../Contact/Contact';

import styles from './supportedFileTypes.scss';

const SupportedFileTypes = () => (
  <div className={styles.main}>
    <p>
      You&lsquo;ll need to transfer your text thread from your phone to an uploadable file with an SMS backup tool.
      These tools will back up your text threads to cloud storage and other locations.
    </p>

    <h4>Supported SMS backup tools:</h4>
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

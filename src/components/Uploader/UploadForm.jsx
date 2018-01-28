/**
 * @class UploadForm
 * @description
 */

/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid, jsx-a11y/label-has-for */


import React from 'react';
import PropTypes from 'prop-types';

import baseStyles from '../../base.scss';
import styles from './uploadForm.scss';

const propTypes = {
  onFileChange: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  clearData: PropTypes.func,
};

const defaultProps = {
  clearData: undefined,
};

const UploadForm = ({ onFileChange, buttonText, clearData }) => (
  <form className={styles.main}>
    <label htmlFor="file" className={baseStyles.button}>{buttonText}</label>
    <input style={{ display: 'none' }} type="file" name="file" id="file" onChange={onFileChange} />
    {clearData && <a href="#" className={styles.clearLink} onClick={clearData}>Clear messages</a>}
  </form>
);

UploadForm.propTypes = propTypes;
UploadForm.defaultProps = defaultProps;

export default UploadForm;

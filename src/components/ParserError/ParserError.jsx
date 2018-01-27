/**
 * @class parserError
 * @description
 */

import React from 'react';
// import PropTypes from 'prop-types';

import styles from './parserError.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

const parserError = () => (
  <div className={styles.error}>
    There was an error reading the file you uploaded.  Make sure your file is a supported backup Type.
  </div>
);

parserError.propTypes = propTypes;

export default parserError;

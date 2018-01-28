import React from 'react';
import PropTypes from 'prop-types';

import UploadForm from './UploadForm';
import SupportedFileTypes from '../SupportedFileTypes/SupportedFileTypes';

const propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

const Uploader = ({ onFileChange }) => (
  <div>
    <UploadForm onFileChange={onFileChange} buttonText="Choose File" />
    <SupportedFileTypes />
  </div>
);

Uploader.propTypes = propTypes;

export default Uploader;

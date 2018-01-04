import React from 'react';

const Uploader = ({ onFileChange }) => (
  <form>
    <input type="file" name="file" id="file" onChange={onFileChange} />
  </form>
);

export default Uploader;

import React from 'react';
import PropTypes from 'prop-types';

import UploadForm from './UploadForm';
import SupportedFileTypes from '../SupportedFileTypes/SupportedFileTypes';

const propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

const Uploader = ({ onFileChange }) => (
  <div>
    <p>
      <h4>There are three steps to follow to create a PDF of your text messages</h4>
      <ol>
        <li>
          <strong>Copy your texts from your phone</strong> <br />
          A website cannot access your text messages for security reasons.  In order to use this website,
          you need to use an App called an &quot;SMS backup tool&quot; to copy your texts from your phone.
          Typically these Apps will upload a file containing the texts to a cloud storage system such as Google Drive.
          There are a number of apps for this out there, the list below shows which ones we currently support.
          The links below for supported backup tools will give instructions on how to use each tool.  This is the
          most involved part of the process as it involves installing an App and setting it up.

          <SupportedFileTypes />
        </li>

        <li>
          <strong>Download the backup file to your computer</strong> <br />
          Once you&apos;ve backed up your text messages, you&apos;ll need to download that file to your computer.
          If you backed up the file to Google drive for example, find the file in your google drive and right click
          to download it to your computer.  Different backup Apps will have different options for where to upload the
          the file that contains your text messages.
        </li>

        <li>
          <strong>Upload the backup file to this website</strong> <br />
          Once you&apos;ve completed the above steps, you can upload the file you downloaded to this website
          to view the texts on a larger screen and download them as a PDF. Upload the file by clicking the &quot;Choose file&quot;
          button below.  Once you upload the file you&apos;ll see all the texts and there will be instructions on
          how to save them as a PDF.
        </li>
      </ol>
    </p>
    <UploadForm onFileChange={onFileChange} buttonText="Choose File" />

  </div>
);

Uploader.propTypes = propTypes;

export default Uploader;

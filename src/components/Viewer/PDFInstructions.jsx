/**
 * @class PDFInstructions
 * @description
 */

import React from 'react';
import { detect } from 'detect-browser';

import styles from './pdfInstructions.scss';

const noInstructions = 'No instructions currently for your browser.  Google "save web page to PDF" with your browser to find instructions.';

const browserLink = () => {
  const browser = detect();

  switch (browser && browser.name) {
    case 'chrome':
      return 'https://www.wikihow.com/Save-a-Web-Page-as-a-PDF-in-Google-Chrome';

    case 'firefox':
      return 'https://support.mozilla.org/en-US/kb/save-page-pdf-firefox-android';

    case 'safari':
      return 'http://ccm.net/faq/34652-safari-save-webpages-in-the-pdf-format';

    case 'edge':
      return 'http://www.thewindowsclub.com/save-web-page-pdf-file-edge-browser';

    default:
      return null;
  }
};

const BrowserSpecificInstructions = () => {
  const link = browserLink();

  if (link) {
    return (
      <h4 className={styles.instructionsHeading}>
        Follow these <a href={link} target="_blank">instructions</a> to save a PDF of this page
      </h4>
    );
  }

  return (
    <h3>{noInstructions}</h3>
  );
};

const PDFInstructions = () => (
  <div>
    <p className={styles.instructionsExplanation}>
      Most likely you&lsquo;ll want to save this screen as a PDF to share and search later.
    </p>

    <BrowserSpecificInstructions />
  </div>
);

export default PDFInstructions;

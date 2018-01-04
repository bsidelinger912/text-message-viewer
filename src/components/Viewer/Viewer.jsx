import React from 'react';

import styles from './viewer.scss';

const Viewer = ({ textData, clearData }) => {
  const rows = textData.map(row => (
    <div className={styles.textItem}>
      <div className={row.sentReceived === 'sent' ? styles.sent : styles.received}>
        <div className={styles.name}>{row.sender}</div>
        <span className={styles.date}>{row.date}</span>
        <div className={styles.body}>{row.body}</div>
      </div>
      <div className={styles.clear} />
    </div>
  ));

  return (
    <div>
      <div>
        <button onClick={clearData}>upload a new file</button>
      </div>
      {rows}
    </div>
  );
};

export default Viewer;

/**
 * @class Contact
 * @description
 */


/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */

import React from 'react';
// import PropTypes from 'prop-types';

import Modal from '../Modal';

import styles from './contact.scss';

class Contact extends React.Component {
  static propTypes = {
    // test: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.preventDefault();
    this.setState({ modalVisible: true });
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <div className={styles.main}>
        <a
          className={styles.contactLink}
          onClick={this.showModal}
        >
          Contact
        </a>
        <Modal visible={modalVisible}>
          <div className={styles.content}>Email ben.sidelinger [at] gmail.com to request new file types and other features.</div>
        </Modal>
      </div>
    );
  }
}

export default Contact;

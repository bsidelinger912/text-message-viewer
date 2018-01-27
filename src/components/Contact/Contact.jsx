/**
 * @class Contact
 * @description
 */

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

  showModal() {
    this.setState({ modalVisible: true });
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <div className={styles.main}>
        <button className={styles.contactLink} onClick={this.showModal}>Contact</button>
        <Modal visible={modalVisible}>
          <div>Email ben.sidelinger [at] gmail.com to request new file types and other features.</div>
        </Modal>
      </div>
    );
  }
}

export default Contact;

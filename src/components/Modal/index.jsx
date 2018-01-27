/**
 * @class Modal
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import { stopProp } from '../../utils/interactions';

import styles from './modal.scss';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: false,
  }

  constructor() {
    super();

    this.state = { visible: false };

    this.toggleVisible = this.toggleVisible.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.visible });
  }

  // TODO: do we need this???
  toggleVisible() {
    this.setState({ visible: !this.state.visible });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const { children } = this.props;

    const portal = this.state.visible ? (
      <Portal className={styles.portal} onClick={this.hide}>
        <div className={styles.modalWindow} onClick={stopProp}>
          <button className={styles.closeButton} onClick={this.hide}>&times;</button>
          {children}
        </div>
      </Portal>
    ) : null;

    return (
      <div className={styles.main}>
        {portal}
      </div>
    );
  }
}

export default Modal;

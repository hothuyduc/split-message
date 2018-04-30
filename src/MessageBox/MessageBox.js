import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader } from 'reactstrap';

import './MessageBox.css';
import MessageContainer from './MessageContainer';
import MessageController from './MessageController';

export default class MessageBox extends PureComponent {

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

  state = {
    messages: []
  };

  addMessage = newMessage => this.setState(({ messages }) => ({ messages: [...messages, ...newMessage] }));

  onClose = () => {
    this.props.toggleModal();
    this.setState({ messages: [] })
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} backdrop="static" className="app-message-box">
        <ModalHeader toggle={this.onClose}>
          <img src="./logo.svg" className="user-image p-0 m-0" alt="Any Avatar" />
          <span>User</span>
        </ModalHeader>
        <MessageContainer messages={this.state.messages} />
        <MessageController addMessage={this.addMessage}/>
      </Modal>
    )
  }
}

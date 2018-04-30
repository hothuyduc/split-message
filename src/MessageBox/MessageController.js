import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, ModalFooter } from 'reactstrap';
import Service from './splitMessage';

export default class MessageController extends PureComponent {

  static propTypes = { addMessage: PropTypes.func.isRequired };

  state = { newMsg: '' };

  componentWillUnmount() {
    this.setState({ newMsg: '' })
  }

  onChange = event => this.setState({ newMsg: event.target.value });

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.addNewMessage()
    }
  }

  addNewMessage = () => {
    if (this.state.newMsg === '') {
      return
    }
    this.props.addMessage(Service.splitMessage(this.state.newMsg));
    this.setState({ newMsg: '' })
  };

  render() {
    return (
      <ModalFooter>
        <section className="w-100 d-flex">
          <Input
            autoFocus={true}
            placeholder="Enter message"
            value={this.state.newMsg}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
          <Button
            color="primary"
            className="rounded ml-3"
            disabled={this.state.newMsg.length === 0}
            onClick={this.addNewMessage}
          >
            <i className="fa fa-paper-plane" /> Send
          </Button>
        </section>
      </ModalFooter>
    )
  }
}

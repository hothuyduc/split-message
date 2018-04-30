import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Alert, ModalBody } from 'reactstrap'

export default class MessageContainer extends PureComponent {

  static propTypes = {
    messages: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    if (this.msgEnd) {
      this.msgEnd.scrollIntoView({ behavior: 'smooth' })
    }
  }

  renderMsg = (msg, index) => {
    return (
      <div key={msg + index} className="d-flex justify-content-end">
        <Alert color="primary" className="text-right p-2 mb-2">{msg}</Alert>
      </div>
    )
  };

  render() {
    return (
      <ModalBody>
        <div className="box-container d-flex justify-content-end">
          <div className="mt-auto">{this.props.messages.map(this.renderMsg)}</div>
        </div>
        <div ref={msgEnd => this.msgEnd = msgEnd} />
      </ModalBody>
    )
  }
}

import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';

import MessageBox from './MessageBox';

export default class App extends PureComponent {
  state = {
    isOpen: false
  };

  toggleModal = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  renderToggleButton() {
    return (
      <Button
        outline
        color="primary"
        className="mt-auto mr-3 p-0 rounded-circle"
        style={{ width: '60px', height: '60px' }}
        onClick={this.toggleModal}
      >
        <i className="fa fa-lg fa-comments" />
      </Button>
    )
  }

  render() {
    return (
      <section className="w-100 h-100 p-3 d-flex justify-content-end">
        {this.renderToggleButton()}
        <MessageBox isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>
      </section>
    )
  }
}

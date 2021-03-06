import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.show !== this.props.show
      || nextProps.children !== this.props.children) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} closeBackdrop={this.props.closeBackdrop} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;

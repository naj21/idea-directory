import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import themes from 'globals/themes';
import { bindActionCreators } from 'redux';
import { clearMessage } from 'services/messaging/actions';
import { connect } from 'react-redux';

const portalElement = document.getElementById('message-modal');

const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  position: fixed;
  top: 50px;
  min-width: 300px;
  right: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: translate(${(props) => (props.active ? '-50px' : 0)}, 0);
  transition: all 0.25s;
  font-size: ${themes.font.sizes.normal};
  border-radius: ${themes.border.radius.small};
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, 0.2);
  z-index: 10;
  cursor: pointer;

  > span {
    margin-right: 16px;
  }

  ${(props) => {
    switch (props.type) {
      case 'warning':
        return `
              background-color: ${themes.colors.red};
              color: white;
          `;
      case 'success':
        return `
             background-color: ${themes.colors.green};
             color: white;
          `;
      default:
        return `
             background-color: #212121;
             color: white;
          `;
    }
  }};
`;

class Toast extends Component {
  portalContainer;
  static MESSAGE_DURATION_MS = 4000;
  timeout;

  constructor(props) {
    super(props);
    this.timeout = null;
    this.state = {
      active: false,
    };
    this.portalContainer = document.createElement('div');
  }

  componentDidUpdate(prevProps) {
    const changedMessage = this.props.message !== prevProps.message;
    const message = this.props.message;
    if (changedMessage && message) {
      this.setState({
        active: true,
      });
      this.removeCurrentTimeout();
      this.timeout = window.setTimeout(() => {
        this.removeToast();
      }, Toast.MESSAGE_DURATION_MS);
    }
  }

  removeCurrentTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  removeToast = () => {
    this.setState({ active: false }, () => {
      this.removeCurrentTimeout();
      setTimeout(() => this.props.clearMessage(), 250);
    });
  };

  componentDidMount() {
    portalElement.appendChild(this.portalContainer);
  }

  componentWillUnmount() {
    portalElement.removeChild(this.portalContainer);
    this.removeCurrentTimeout();
  }

  render() {
    const message = this.props.message;

    return ReactDOM.createPortal(
      <ToastContainer active={this.state.active} type={this.props.type}>
        <span>{message}</span>
      </ToastContainer>,
      this.portalContainer
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message.data,
    type: state.message.type,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearMessage: bindActionCreators(clearMessage, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast);

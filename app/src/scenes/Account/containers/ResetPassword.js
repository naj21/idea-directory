import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'shared/Button';
import Input from 'shared/Input';
import { bindActionCreators } from 'redux';
import { requestResetLinkThunk, resetPasswordThunk } from 'services/account/thunks';
import logo from 'globals/images/logo.svg';
import mail from 'globals/images/mail.svg';
import '../Account.scss';

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasLink: false,
    };
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.match.params.token
      ? this.onResetPassword(email)
      : this.onRequestLink(password);
  };

  onRequestLink = (email) => {
    this.props.requestResetLink(email);
  };

  onResetPassword = (password) => {
    this.props.requestResetPassword(password);
  };

  renderResetPassword = () => {
    const { password } = this.state;

    return (
      <>
        <h3>Create a new password</h3>
        <p>Choose a password that’s hard to guess and unique to this account.</p>
        <form className="reset-password__form" onSubmit={this.handleSubmit}>
          <Input
            label="New Password"
            placeholder="*******"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button type="submit">Proceed</Button>
        </form>
      </>
    );
  };

  renderResetLink = () => {
    const { email, hasLink } = this.state;

    return !hasLink ? (
      <>
        <h3>Reset Password</h3>
        <p>
          Enter the email you use for your account, and we’ll help you create a new
          password
        </p>
        <form className="reset-password__form" onSubmit={this.handleSubmit}>
          <Input
            label="Email"
            placeholder="idea@yuhu.co"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Button type="submit">Proceed</Button>
        </form>
      </>
    ) : (
      <div className="reset-password__section__msg">
        <img src={mail} alt="mail" />
        <h3>You’re almost there!</h3>
        <p>
          Click on the link we sent to your email <br /> address to change your
          password
        </p>
      </div>
    );
  };

  render() {
    return (
      <article className="reset-password">
        <img src={logo} alt="logo" />
        <section className="reset-password__section">
          {!this.props.match.params.token
            ? this.renderResetLink()
            : this.renderResetPassword()}
        </section>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    resetLink: state.account.resetLink,
    resetPassword: state.account.resetPassword,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestResetLink: bindActionCreators(requestResetLinkThunk, dispatch),
    requestResetPassword: bindActionCreators(resetPasswordThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);

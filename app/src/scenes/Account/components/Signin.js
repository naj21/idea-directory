import React, { Component } from 'react';
import Auth from '../containers/Auth';
import login from 'globals/images/login.svg';
import Input from 'shared/Input';
import Button from 'shared/Button';
import Link from 'shared/Link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginThunk } from 'services/account/thunks';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.loginData.loading &&
      !this.props.loginData.loading &&
      this.props.loginData.data
    ) {
      this.props.history.push('/idea');
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const { username, password } = this.state;
    login(username, password);
  };

  header = () => (
    <>
      <p>Log In</p>
      <p>Please Input your details</p>
    </>
  );

  content = () => {
    const { username, password } = this.state;
    const {
      loginData: { loading },
    } = this.props;

    return (
      <>
        <Input
          label="Username/Email"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => this.setState({ username: e.target.value })}
          required
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => this.setState({ password: e.target.value })}
          required
        />
        <Link to={'/reset-password'} size="sm">
          Forgot Password?
        </Link>
        <div>
          <p>
            Don’t have an account?{' '}
            <Link to={'/signup'} size="sm">
              Sign Up
            </Link>
          </p>
          <Button type="submit" loading={loading}>
            Proceed
          </Button>
        </div>
      </>
    );
  };

  hero = () => (
    <>
      <h1>
        Welcome friend, <span>Log in to your account</span>
      </h1>
      <img src={login} alt="login" />
    </>
  );

  render() {
    return (
      <Auth
        content={this.content}
        hero={this.hero}
        header={this.header}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loginData: state.account.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(loginThunk, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

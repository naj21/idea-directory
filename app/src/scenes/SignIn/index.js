import React, { Component } from 'react';
import login from 'globals/images/login.svg';
import Input from 'shared/Input';
import Card from 'shared/Card';
import Button from 'shared/Button';
import Link from 'shared/Link';
import './SignIn.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginThunk } from 'services/auth/thunks';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  onSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    login(email, password);
  };

  render() {
    console.log(this.props);

    const { email, password } = this.state;

    return (
      <article className="login">
        <div className="login__hero">
          <h1>
            Welcome friend, <span>Log in to your account</span>
          </h1>
          <img src={login} alt="login" />
        </div>
        <Card rounded className="login__card">
          <div className="login__form-header">
            <p>Log In</p>
            <p>Please Input your details</p>
          </div>
          <form className="login__form" onSubmit={this.onSubmit}>
            <Input
              label="User Name"
              placeholder="User Name"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
            <Link to={'/signup'}>Forgot Password?</Link>
            <div>
              <p>
                Don’t have an account? <Link to={'/signup'}>Sign Up</Link>
              </p>
              <Button type="submit">Proceed</Button>
            </div>
          </form>
        </Card>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(loginThunk, dispatch),
});

export default connect(null, mapDispatchToProps)(SignIn);

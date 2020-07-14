import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from 'shared/Input';
import Button from 'shared/Button';
import Vector from 'globals/images/Vector.svg';
import Link from 'shared/Link';
import { createSignUp } from 'services/auth/actions';
import Auth from '..';

const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp({ username, email, password });
  };

  const header = () => (
    <>
      <p>Sign Up</p>
      <p> Please Enter Your Details</p>
    </>
  );

  const content = () => {
    const {
      signupData: { loading },
    } = props;

    return (
      <>
        <Input
          placeholder="Username"
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          type="text"
          name="username"
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          label="Email"
          onChange={handleEmailChange}
          name="email"
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          label="Password"
        />

        <div>
          <p>
            {' '}
            Got an account?
            <Link to={'/signin'} size="sm">
              {' '}
              Sign In{' '}
            </Link>
          </p>
          <Button loading={loading}>Proceed</Button>
        </div>
      </>
    );
  };

  const hero = () => (
    <>
      <h1>
        Hello Friend, <span>Create Your Account</span>
      </h1>
      <img src={Vector} alt="signup" />
    </>
  );

  return (
    <Auth content={content} hero={hero} header={header} onSubmit={handleSubmit} />
  );
};

const mapStateToProps = (state) => ({
  signupData: state.auth.signup,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (details) => dispatch(createSignUp(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

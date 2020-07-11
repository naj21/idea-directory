import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Vector from '../../globals/images/Vector.svg';
import Link from '../../shared/Link';

import { connect } from 'react-redux';
import { createSignUp } from '../../services/auth/actions';

import './SignUp.scss';

const FormInput = styled(Input)`
  width: 466px;
  margin-bottom: 44px;
`;

const SignUpLink = styled(Link)`
  padding-top: 10px;
  padding-right: 60px;
  font-size: 13px;
  line-height: 19px;
`;

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

  return (
    <div class="sign-up-container">
      <form onSubmit={handleSubmit}>
        <div class="welcome">
          <p class="colored-message">Hello Friend,</p>
          <p class="message">Create Your Account</p>
          <img class="img" alt="" src={Vector} />
        </div>

        <div class="sign-up-form">
          <p class="signup-header">Sign Up</p>
          <p class="sign-up-text"> Please Enter Your Details</p>
          <hr />

          <FormInput
            placeholder="Username"
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            type="text"
            name="username"
          />
          <FormInput
            type="text"
            placeholder="Email"
            value={email}
            label="Email"
            onChange={handleEmailChange}
            name="email"
          />
          <FormInput
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
            label="Password"
          />

          <div class="sign-up-bottom">
            <p> Got an account?</p>
            <a href="*">
              <SignUpLink> Sign In </SignUpLink>
            </a>
            <Button>Proceed</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (details) => dispatch(createSignUp(details)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);

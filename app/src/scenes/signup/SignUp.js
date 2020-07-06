import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Vector from '../../globals/images/Vector.svg';
import Link from '../../shared/Link';

import { connect } from 'react-redux';

import './SignUp.scss';

const FormInput = styled(Input)`
  width: 466px;
  margin-bottom: 44px;
`;

const SignUpLink = styled(Link)`
  padding-top: 10px;
  padding-right: 90px;
  font-size: 13px;
  line-height: 19px;
`;

const SignUp = () => {
  return (
    <div class="sign-up-container">
      <div class="welcome">
        <p class="colored-message">Hello Friend,</p>
        <p class="message">Create Your Account</p>
        <img class="img" src={Vector} />
      </div>

      <div class="sign-up-form">
        <p class="signup-header">Sign Up</p>
        <p class="sign-up-text"> Please Enter Your Details</p>
        <hr />

        <FormInput
          errors="Please Enter Your Username"
          placeholder="Username"
          label="Username"
        />
        <FormInput placeholder="Email" label="Email" />
        <FormInput placeholder="Password" label="Password" />

        <div class="sign-up-bottom">
          <p> Got an account?</p>
          <SignUpLink> Sign Up </SignUpLink>
          <Button>Proceed</Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SignUp);

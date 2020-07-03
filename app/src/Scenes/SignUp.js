import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Input from '../shared/Input';
import Button from '../shared/Button';
import themes from '../globals/themes';
import Vector from '../images/Vector.svg';

const BiggerContainer = styled.div`
  padding-left: 150px;
`;

const Image = styled.img`
  padding-top: 80px;
`;

const SignInSmallerContainer = styled.div`
  position: absolute;
  width: 594px;
  height: 609px;
  left: 662px;
  top: 126px;
  padding-left: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const FormInput = styled(Input)`
  width: 466px;
  margin-bottom: 44px;
`;
const SignUpText = styled.p`
  padding-top: 33px;
  width: 60px;
  height: 19px;
  padding-bottom: 20px;
  color: #5a646a;
`;
const EnterDetailsText = styled.p`
  height: 20px;
  font-size: 12px;
  line-height: 19px;
  padding-bottom: 15px;
  color: rgba(90, 100, 106, 0.5);
`;

const HorizontalLine = styled.hr`
  height: 0px;
  border: 0.5px solid #e1e6eb;
  margin-bottom: 34px;
`;

const ContainerBottom = styled.div`
  display: flex;
`;

const ProceedButton = styled(Button)``;

const WelcomeMessageContainer = styled.div`
  width: 422px;
  margin-top: 180px;
`;

const Message = styled.p`
  font-size: 40px;
  line-height: 50px;
  color: ${themes.colors.gray};

  ${(props) =>
    props.colored &&
    css`
      color: ${themes.colors.primary};
    `}
`;

const SignUp = () => {
  return (
    <BiggerContainer>
      <WelcomeMessageContainer>
        <Message colored>Hello Friend,</Message>
        <Message>Create Your Account</Message>
        <Image src={Vector} />
      </WelcomeMessageContainer>

      <SignInSmallerContainer>
        <SignUpText>Sign Up</SignUpText>
        <EnterDetailsText>Please Enter Your Details</EnterDetailsText>
        <HorizontalLine />

        <FormInput placeholder="Username" label="Username" />
        <FormInput placeholder="Email" label="Email" />
        <FormInput placeholder="Password" label="Password" />

        <ContainerBottom>
          <ProceedButton>Proceed</ProceedButton>
        </ContainerBottom>
      </SignInSmallerContainer>
    </BiggerContainer>
  );
};

export default SignUp;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const IInput = styled.input`
  position: absolute;
  width: 466px;
  height: 40px;
  left: 693px;
  top: 277px;

  background: #ffffff;
  /* grey-500 */

  border: 1px solid #e1e6eb;
  box-sizing: border-box;

  ::placeholder {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    padding-left: 20px;
    /* identical to box height, or 160% */

    /* grey-300 */

    color: #acb5bb;
  }
`;

const Label = styled.p`
  position: absolute;
  width: 71px;
  height: 17px;
  left: 693px;
  top: 243px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  text-align: center;
  padding: 0 10px 20px 30px 30px;
  color: #5a646a;
`;

const InputContainer = styled.div`
width: 100px:
padding-down:30px;

`;

const Input = (props) => {
  return (
    <InputContainer>
      <Label>Username</Label>
      <IInput placeholder="Placeholder text"></IInput>
    </InputContainer>
  );
};

export default Input;

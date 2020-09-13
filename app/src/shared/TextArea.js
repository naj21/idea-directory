import React from 'react';
import styled from 'styled-components';
import themes from 'globals/themes';
import { Label, InputGroup } from './Input';

const ITextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid #e1e6eb;
  border-radius: ${themes.border.radius.small};
  padding: 35px 20px;
`;

const TextArea = (props) => {
  const { label, value } = props;
  return (
    <InputGroup>
      <Label>{label}</Label>
      <ITextArea {...props}>{value}</ITextArea>
    </InputGroup>
  );
};

export default TextArea;

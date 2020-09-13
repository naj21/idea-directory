import React, { useState } from 'react';
import styled from 'styled-components';
import themes from '../globals/themes';
import { EyeOffOutline } from '@styled-icons/evaicons-outline/EyeOffOutline';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';
import StyledIcon from 'shared/StyledIcon';

const IInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  width: 100%;
  height: 98%%;
  border: none;
  outline: none;
  background-color: inherit;
  padding-left: 10px;

  ::placeholder {
    font-size: 15px;
    line-height: 22px;
    color: #acb5bb;
  }

  :focus {
    border: 0;
  }
`;

export const Label = styled.p`
  font-size: ${themes.font.sizes.normal};
  line-height: 17px;
  // text-align: center;
  margin-bottom: 17px;
  color: #5a646a;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  // :focus-within{ 
  //   border: 1px solid ${themes.colors.primary}; 
  //  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background: ${(props) =>
    props.colored ? themes.colors.gray : themes.colors.white};
  border: 1px solid #e1e6eb;
  border-radius: ${themes.border.radius.small};
  align-items: center;

  > :nth-child(2) {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

/**
 * Input examples
 * @example ./docs/Input.md
 */
const Input = (props) => {
  const {
    hideLabel,
    placeholder,
    icon,
    label,
    value,
    onChange,
    type,
    disable,
    required,
    maxlength,
  } = props;

  const [inputType, setInputType] = useState(type);

  const switchIcon = () => {
    if (inputType === type) return setInputType('text');
    setInputType(type);
  };

  const passwordIcon = (
    <StyledIcon
      icon={inputType === 'text' ? <EyeOffOutline /> : <EyeOutline />}
      onClick={switchIcon}
    />
  );

  return (
    <InputGroup>
      {!hideLabel && <Label>{label}</Label>}
      <InputContainer {...props}>
        <IInput
          disable={disable}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          icon={icon}
          required={required}
          maxlength={maxlength}
        />
        {type === 'password' ? passwordIcon : icon}
      </InputContainer>
    </InputGroup>
  );
};

/** @component */
export default Input;

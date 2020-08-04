import React from 'react';
import styled from 'styled-components';
import themes from '../globals/themes';

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

const InputGroup = styled.div`
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
  box-sizing: border-box;
  border-radius: ${themes.border.radius.small};
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
  return (
    <InputGroup>
      {!hideLabel && <Label>{label}</Label>}
      <InputContainer {...props}>
        <IInput
          disable={disable}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          icon={icon}
          required={required}
          maxlength={maxlength}
        />
        {icon}
      </InputContainer>
    </InputGroup>
  );
};

/** @component */
export default Input;

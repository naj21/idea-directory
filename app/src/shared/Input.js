import React from 'react';
import styled from 'styled-components';
import themes from '../globals/themes';

const IInput = styled.input`
   width: 100%;
  height: 98%%;
  border: none;
  outline:none;

  ::placeholder {   
    line-height: 22px;
    padding-left: 10px;
    color: #acb5bb;
  }

  :focus{  
    border: 0;
    } 

`;

const Label = styled.p`
  font-size: ${themes.font.sizes.normal};
  line-height: 17px;
  text-align: center;
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
  background: ${themes.colors.white};
  border: 1px solid #e1e6eb;
  box-sizing: border-box;
  border-radius: ${themes.border.radius.small};
`;

const Input = (props) => {
  const { hideLabel, placeholder, icon, label } = props;
  return (
    <InputGroup>
      {!hideLabel && <Label>{label}</Label>}
      <InputContainer {...props}>
        {icon}
        <IInput placeholder={placeholder} icon={icon} />
      </InputContainer>
    </InputGroup>
  );
};

export default Input;

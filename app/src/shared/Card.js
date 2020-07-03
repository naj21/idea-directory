import styled, { css } from 'styled-components';
import themes from '../globals/themes';

const Card = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;

  ${(props) =>
    props.rounded &&
    css`
      border-radius: ${themes.border.radius.large};
    `}
`;

export default Card;

import themes from "globals/themes";

const { default: styled } = require("styled-components");

const Loader = styled.div`
  border: 3px solid ${themes.colors.primary};
  border-radius: 50%;
  border-top: 3px solid ${themes.colors.lightGray};
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default Loader;
import styled from "styled-components";
import { colors } from "../../constants/colors.constants";

export const FormInputLabel = styled.label`
  display: block;
  color: ${colors.blackLight};
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
`;


export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${colors.blackLight};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(49, 39, 37, 0.4);
  margin: 5px 0px;
  ::placeholder {
    color: rgba(56, 64, 66, 0.5);
    font-size: 1rem;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(56, 64, 66, 0.5);
    font-size: 1rem ;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: rgba(56, 64, 66, 0.5);
    font-size: 1rem;
  }

`;



export const Group = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

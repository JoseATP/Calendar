import styled from "styled-components";
import { colors } from "../../constants/colors.constants";

type BaseButtonProps = {
  backgroundColor?: string;
};

export const BaseButton = styled.button<BaseButtonProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 16px;
  background-color: ${colors.base};
  color: ${colors.white};
  font-family: "Open Sans";
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(90deg, ${colors.base2} 0%, ${colors.base} 100%);
  }
`;

export const GrayButton = styled(BaseButton)`
  background-color: ${colors.grey};
  color: ${colors.white};

  &:hover {
    background: linear-gradient(90deg, #333333 0%, #626262 100%);
  }
`;

export const RedButton = styled(BaseButton)`
  background-color: ${colors.error};
  color: ${colors.white};

  &:hover {
    background: linear-gradient(90deg, #da4848 0%, ${colors.error} 100%);
  }
`;

export const GradientButton = styled(BaseButton)`
  background: linear-gradient(90deg, #ff465d 0%, #bc46ba 100%);
  color: white;

  &:hover {
    background: linear-gradient(90deg, #bc46ba 0%, #ff465d 100%);
    color: white;
  }
`;

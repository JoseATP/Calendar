import styled from "styled-components";
import { colors } from "../../constants/colors.constants";

export const ReminderContainer = styled.div`
  width: 60%;
  background-color: white;
  border-radius: 40px 0px 0px 40px;
  padding: 5px 40px;
`;

export const FormContainer = styled.form`
  &:not(:last-child) {
    margin-bottom: 100px;
  }
`;

type ButtonsContainerProps = {
  justify?: string;
};

export const ButtonsContainer = styled.div<ButtonsContainerProps>`
  display: flex;
  gap: 20px;
  justify-content: ${({ justify }) => (!justify ? "flex-end" : justify)};
`;

export const Divider = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid ${colors.greyLight};
`;

export const Date = styled.h2``;

export const Group = styled.div`
  display: flex;
  gap: 50px;
  position: relative;
  margin-top: -30px;
`;

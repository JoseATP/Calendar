import styled, { css } from "styled-components";

export const Frame = styled.div`
  width: 100%;
  padding: 40px 0px;
`;

export const SelectedMonth = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  font-size: 50px;
`;

export const SelectedYear = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  font-size: 80px;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const BulletButton = styled.div`
  cursor: pointer;
  margin: 0px 5px 0px 5px
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

type DayProps = {
  isToday?: boolean;
  isSelected?: boolean;
  hasReminder?: boolean;
  day?: number | string;
};

export const Day = styled.div<DayProps>`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  ${(props) =>
    props.isToday &&
    css`
      ::after {
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 5px;
        left: 18px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: linear-gradient(90deg, #ec9f05 0%, #ff4e00 100%);
        z-index: -1;
      }
    `}

  ${(props) =>
    props.isSelected &&
    css`
      ::after {
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 5px;
        left: 18px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: linear-gradient(90deg, #ff465d 0%, #bc46ba 100%);
        z-index: -1;
      }
    `}

  ${(props) =>
    props.hasReminder &&
    css`
      ::before {
        content: "";
        position: absolute;
        top: 10px;
        right: 20px;
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: #00ffcc;
        z-index: 1;
      }
    `}
`;

export const Footer = styled.footer`
  font-weight: 300;
  margin: 70px 0px;
  text-align: center;
`;

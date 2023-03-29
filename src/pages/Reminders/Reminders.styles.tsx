import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const AddReminderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
`;

export const DateLabel = styled.h2``;

export const ReminderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0px;
  margin: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 28px 2px #d1dcf0;
  position: relative;
`;

export const RemindersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Color = styled.div`
  border-radius: 200px;
  margin-left: 10px;
  width: 18px;
  height: 120px;
  background-color: ${({ color }) => color};
`;

export const TitleAndDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 15px;
`;

export const Title = styled.div`
  color: #797979;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
  color: #384042;
`;

export const HourContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  border-left: 1px solid #d1dcf0;
`;

export const Hour = styled.label`
  font-size: 40px;
  color: #797979;
`;

export const FABContainer = styled.div`
  position: absolute;
  cursor: pointer;
  right: -5px;
  bottom: -20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(90deg, #3bc6fb 0%, #00ffcc 100%);

  &:hover {
    background: linear-gradient(90deg, #00ffcc 0%, #3bc6fb 100%);
  }
`;

export const FAB = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Clock = styled.img`
  width: 35px;
  height: 35px;
`;

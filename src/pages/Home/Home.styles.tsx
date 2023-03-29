import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 640px;
  width: 1180px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CalendarContainer = styled.div`
  width: 40%;
  color: white;
  background: linear-gradient(180deg, #101277 0%, #421f91 100%);
  border-radius: 0px 40px 40px 0px;
`;

export const ReminderContainer = styled.div`
  width: 60%;
  background-color: white;
  border-radius: 40px 0px 0px 40px;
`;

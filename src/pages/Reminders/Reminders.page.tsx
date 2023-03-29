import { FC } from "react";
import {
  Container,
  Color,
  ReminderContainer,
  Description,
  Hour,
  HourContainer,
  Title,
  TitleAndDescriptionContainer,
  FAB,
  Clock,
  FABContainer,
  RemindersContainer,
} from "./Reminders.styles";
import { TReminder } from "../../interface/reminder.interface";
import AddReminder from "../../components/AddReminder/AddReminder.component";
import { useSelector } from "react-redux";
import { TRemindersState } from "../../redux/reducers/reminder.reducer";
import { useNavigate } from "react-router-dom";
import ClockImg from "../../assets/images/clock.png";
import PenImg from "../../assets/images/pen.png";

const Reminders: FC = () => {
  const navigate = useNavigate();

  const { filteredReminders, selectedDate } = useSelector(
    (state: TRemindersState) => state.reminders
  );

  return (
    <Container>
      <AddReminder selectedDate={selectedDate} />
      <RemindersContainer>
        {filteredReminders?.map((reminder: TReminder) => (
          <ReminderContainer key={reminder.id}>
            <Color color={reminder.color} />
            <TitleAndDescriptionContainer>
              <Title>{reminder.title}</Title>
              <Description>{reminder.description}</Description>
            </TitleAndDescriptionContainer>
            <HourContainer>
              <Clock src={ClockImg} />
              <Hour>{reminder.hour}</Hour>
            </HourContainer>
            <FABContainer
              onClick={() => navigate(`addReminder/${reminder.id}`)}
            >
              <FAB src={PenImg} />
            </FABContainer>
          </ReminderContainer>
        ))}
      </RemindersContainer>
    </Container>
  );
};

export default Reminders;

import { FC } from "react";
import {
  Container,
  Image,
  ImageContainer,
  Label,
} from "./EmptyReminders.styles";
import NoRemindersImage from "./../../assets/images/no-reminders.png";
import AddReminder from "../../components/AddReminder/AddReminder.component";
import { useSelector } from "react-redux";
import { TRemindersState } from "../../redux/reducers/reminder.reducer";

const EmptyReminders: FC = () => {
  const { selectedDate } = useSelector(
    (state: TRemindersState) => state.reminders
  );

  return (
    <Container>
      <AddReminder selectedDate={selectedDate} />
      <ImageContainer>
        <Image src={NoRemindersImage} alt={NoRemindersImage} />
        <Label>No reminders registered so far</Label>
      </ImageContainer>
    </Container>
  );
};

export default EmptyReminders;

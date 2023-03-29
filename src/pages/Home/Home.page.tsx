import { useSelector } from "react-redux";
import { TRemindersState } from "../../redux/reducers/reminder.reducer";
import EmptyReminders from "../EmptyReminders/EmptyReminders.page";
import Reminders from "../Reminders/Reminders.page";
import { ReminderContainer } from "./Home.styles";

const Home = () => {
  const { filteredReminders } = useSelector(
    (state: TRemindersState) => state.reminders
  );

  return (
    <ReminderContainer>
      {filteredReminders.length === 0 ? <EmptyReminders /> : <Reminders />}
    </ReminderContainer>
  );
};

export default Home;

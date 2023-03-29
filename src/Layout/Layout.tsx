import { FC } from "react";
import { Calendar } from "../components/Calendar/Calendar.component";
import { TReminder } from "../interface/reminder.interface";
import { CalendarContainer, Container } from "./Layout.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFilteredReminders,
  updateSelectedDate,
} from "../redux/actions/reminder.action";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const { reminders } = useSelector((state: any) => state.reminders);
  const dispatch = useDispatch();

  return (
    <Container>
      {children}
      <CalendarContainer>
        <Calendar
          reminders={reminders}
          updateSelectedDate={(date: Date) =>
            dispatch(updateSelectedDate(date))
          }
          updateFilteredReminders={(reminders: TReminder[]) =>
            dispatch(updateFilteredReminders(reminders))
          }
        />
      </CalendarContainer>
    </Container>
  );
};

export default Layout;

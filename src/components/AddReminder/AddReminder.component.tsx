import { FC } from "react";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/Button/Button.component";
import { AddReminderContainer, DateLabel } from "./AddReminder.styles";
import { DATE_OPTIONS } from "../../constants/date.constants";
import { useNavigate } from "react-router-dom";

type AddReminderProps = {
  selectedDate: Date;
};

const AddReminder: FC<AddReminderProps> = ({ selectedDate }) => {
  const navigate = useNavigate();

  return (
    <AddReminderContainer>
      <DateLabel>
        {new Date(selectedDate).toLocaleString("en-MX", DATE_OPTIONS)}
      </DateLabel>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.gradientButton}
        onClick={() => navigate("addReminder")}
      >
        Add reminder
      </Button>
    </AddReminderContainer>
  );
};

export default AddReminder;

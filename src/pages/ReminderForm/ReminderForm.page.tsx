import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/Button/Button.component";
import FormInput from "../../components/FormInput/FormInput.component";
import {
  addNewReminder,
  deleteReminder,
  updateReminder,
} from "../../redux/actions/reminder.action";
import {
  ButtonsContainer,
  Date,
  FormContainer,
  Group,
  ReminderContainer,
  Divider,
} from "./ReminderForm.styles";
import { TRemindersState } from "../../redux/reducers/reminder.reducer";
import { DATE_OPTIONS } from "../../constants/date.constants";
import ColorPicker from "../../components/ColorPicker/ColorPicker.component";

const ReminderForm = () => {
  const initialState = {
    title: "",
    description: "",
    date: "",
    hour: "",
    color: "",
  };

  const { reminders, selectedDate } = useSelector(
    (state: TRemindersState) => state.reminders
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { id } = useParams();

  const searchReminder = () => {
    const reminderFound = reminders.find((reminder) => reminder.id === id);

    if (reminderFound) {
      return reminderFound;
    } else {
      return initialState;
    }
  };

  const [reminderData, setReminderData] = useState(searchReminder);

  const setReminder = (key: string, value: any) =>
    setReminderData((state: any) => ({ ...state, [key]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const uniqueId = uuid().slice(0, 8);

    if (id) {
      dispatch(
        updateReminder({
          id,
          title: reminderData.title,
          description: reminderData.description,
          date: reminderData.date,
          hour: reminderData.hour,
          color: reminderData.color,
        })
      );
    } else {
      dispatch(
        addNewReminder({
          id: uniqueId,
          title: reminderData.title,
          description: reminderData.description,
          date: reminderData.date,
          hour: reminderData.hour,
          color: reminderData.color,
        })
      );
    }

    navigate("/");
  };

  return (
    <ReminderContainer>
      <Date>{`Add reminder - ${selectedDate.toLocaleString(
        "en-MX",
        DATE_OPTIONS
      )}`}</Date>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          required
          name="title"
          label="Title"
          placeholder="Title"
          maxLength={30}
          value={reminderData.title}
          onChange={(e) => setReminder("title", e.target.value)}
        />

        <FormInput
          required
          name="description"
          label="Description"
          placeholder="Description"
          maxLength={30}
          value={reminderData.description}
          onChange={(e) => setReminder("description", e.target.value)}
        />
        <Group>
          <FormInput
            required
            name="date"
            label="Date"
            type="date"
            placeholder="Date"
            value={reminderData.date}
            onChange={(e) => setReminder("date", e.target.value)}
          />
          <FormInput
            required
            name="date"
            label="Time"
            type="time"
            value={reminderData.hour}
            onChange={(e) => setReminder("hour", e.target.value)}
          />
        </Group>
        <ColorPicker
          value={reminderData.color}
          onPickColor={(color: string) => setReminder("color", color)}
        />
        <Divider />
        <ButtonsContainer justify={id ? "space-between" : "flex-end"}>
          {id && (
            <Button
              buttonType={BUTTON_TYPE_CLASSES.redButton}
              onClick={() => {
                if (id) {
                  dispatch(deleteReminder(id));
                  navigate("/");
                }
              }}
            >
              Remove
            </Button>
          )}
          <ButtonsContainer justify="space-between">
            <Button
              buttonType={BUTTON_TYPE_CLASSES.grayButton}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </ButtonsContainer>
        </ButtonsContainer>
      </FormContainer>
    </ReminderContainer>
  );
};

export default ReminderForm;

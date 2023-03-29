import { types } from "../types/types";
import { TReminder } from "../../interface/reminder.interface";
import { remindersData } from "../../constants/reminders.constants";

export type TInitialState = {
  selectedDate: Date;
  filteredReminders: TReminder[];
  reminders: TReminder[];
  active?: TReminder | null;
};

export type TRemindersState = {
  reminders: TInitialState;
};

const initialState: TInitialState = {
  filteredReminders: remindersData,
  reminders: remindersData,
  active: null,
  selectedDate: new Date(),
};

export const remindersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.remindersSelected:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.remindersAddNew:
      return {
        ...state,
        reminders: [action.payload, ...state.reminders],
      };

    case types.remindersLoad:
      return {
        ...state,
        reminders: [...action.payload],
      };

    case types.remindersUpdate:
      return {
        ...state,
        reminders: state.reminders.map((reminder) =>
          reminder.id === action.payload.reminder.id
            ? action.payload.reminder
            : reminder
        ),
      };

    case types.remindersUpdateSelectedDate:
      return {
        ...state,
        selectedDate: action.payload.selectedDate,
      };

    case types.remindersUpdateFilteredReminders:
      return {
        ...state,
        filteredReminders: action.payload.filteredReminders,
      };

    case types.remindersDelete:
      return {
        ...state,
        active: null,
        reminders: state.reminders.filter(
          (reminder) => reminder.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

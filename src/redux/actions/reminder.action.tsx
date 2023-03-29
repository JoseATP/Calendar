import { TReminder } from "../../interface/reminder.interface";
import { types } from "../types/types";

export const setReminders = (reminders: TReminder[]) => ({
  type: types.remindersLoad,
  payload: reminders,
});

export const selectedReminder = (reminder: TReminder) => ({
  type: types.remindersSelected,
  payload: {
    ...reminder,
  },
});

export const addNewReminder = (reminder: TReminder) => ({
  type: types.remindersAddNew,
  payload: {
    ...reminder,
  },
});

export const updateSelectedDate = (date: Date) => ({
  type: types.remindersUpdateSelectedDate,
  payload: {
    selectedDate: new Date(date),
  },
});

export const updateFilteredReminders = (reminders: TReminder[]) => ({
  type: types.remindersUpdateFilteredReminders,
  payload: {
    filteredReminders: reminders,
  },
});

export const updateReminder = (reminder: TReminder) => ({
  type: types.remindersUpdate,
  payload: {
    reminder: {
      ...reminder,
    },
  },
});

export const deleteReminder = (id: number | string) => ({
  type: types.remindersDelete,
  payload: id,
});

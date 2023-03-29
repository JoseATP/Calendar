/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, FC } from "react";
import {
  Frame,
  Header,
  Button,
  BulletButton,
  Day,
  Body,
  SelectedMonth,
  SelectedYear,
  Footer,
} from "./Calendar.styles";
import { TReminder } from "../../interface/reminder.interface";

type CalendarProps = {
  reminders: TReminder[];
  updateFilteredReminders?: any;
  updateSelectedDate?: any;
};

export const Calendar: FC<CalendarProps> = ({
  reminders,
  updateFilteredReminders,
  updateSelectedDate,
}) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  const hasReminder = ({
    year,
    month,
    d,
  }: {
    year: number;
    month: number;
    d: number;
  }) => {
    const remindersCopy = [...reminders];
    const dateToCheck = new Date(year, month, d).toISOString().split("T")[0];
    const hasReminder = remindersCopy.find(
      (reminder) => reminder.date === dateToCheck
    );

    if (hasReminder) {
      return true;
    }

    return false;
  };

  const handleNewDate = (newDate: Date) => {
    setDate(newDate);
    updateSelectedDate(newDate);
  };

  useEffect(() => {
    if (updateFilteredReminders) {
      const remindersFiltered = reminders.filter(
        (reminder) => reminder.date === date.toISOString().split("T")[0]
      );
      updateFilteredReminders(remindersFiltered);
    }
  }, [date, reminders]);

  return (
    <Frame>
      <SelectedYear>{year}</SelectedYear>
      <SelectedMonth>{MONTHS[month]}</SelectedMonth>
      <Header>
        <Button onClick={() => handleNewDate(new Date(year, month - 1, day))}>
          {"<"}
        </Button>
        <BulletButton onClick={() => handleNewDate(new Date())}>{"•"}</BulletButton>
        <Button onClick={() => handleNewDate(new Date(year, month + 1, day))}>
          {">"}
        </Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day
                key={index}
                data-testid={`${d}`}
                isToday={
                  d === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear()
                }
                isSelected={d === day}
                onClick={() => {
                  setDate(new Date(year, month, d));
                  updateSelectedDate(new Date(year, month, d));
                }}
                hasReminder={hasReminder({ year, month, d })}
                day={d}
              >
                {d > 0 ? d : ""}
              </Day>
            );
          })}
      </Body>
      <Footer>@ 2020 Codelitt Inc All rights reserved</Footer>
    </Frame>
  );
};

import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { remindersData } from "../../mocks/reminders.mock";
import { Calendar } from "./Calendar.component";

afterEach(cleanup);

describe("Calendar", () => {
  const updateFilteredReminders = jest.fn();
  const updateSelectedDate = jest.fn();

  it("Should render Calendar component correctly", () => {
    const { asFragment } = render(
      <Calendar
        reminders={remindersData}
        updateFilteredReminders={updateFilteredReminders}
        updateSelectedDate={updateSelectedDate}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Check onSelect date function call", () => {
    render(
      <Calendar
        reminders={remindersData}
        updateFilteredReminders={updateFilteredReminders}
        updateSelectedDate={updateSelectedDate}
      />
    );

    const Day = screen.getByTestId("1");

    fireEvent.click(Day);

    expect(updateFilteredReminders).toHaveBeenCalledTimes(2);
    expect(updateSelectedDate).toHaveBeenCalledTimes(1);
  });
});

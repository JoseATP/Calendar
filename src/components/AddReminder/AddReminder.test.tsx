import { render, fireEvent, screen } from "@testing-library/react";
import AddReminder from "./AddReminder.component";
import { useNavigate } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("AddReminder", () => {
  it("Should render AddReminder component correctly", () => {
    const { asFragment } = render(<AddReminder selectedDate={new Date()} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should navigate to addReminder router correctly", () => {
    render(<AddReminder selectedDate={new Date()} />);

    const button = screen.getByText("Add reminder");

    fireEvent.click(button);

    expect(useNavigate()).toHaveBeenCalledTimes(1);
    expect(useNavigate()).toHaveBeenCalledWith("addReminder");
  });
});

import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInput from "./FormInput.component";

afterEach(cleanup);

describe("Form Input", () => {
  it("Should render FormInput component correctly", () => {
    const { asFragment } = render(<FormInput label="test" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Check formInput type", async () => {
    render(<FormInput />);

    const FormInputElem = screen.getByRole("textbox");

    userEvent.clear(FormInputElem);
    userEvent.type(FormInputElem, "Title");

    expect(FormInputElem).toHaveValue("Title");
  });
});

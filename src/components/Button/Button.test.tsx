import { render, screen, cleanup } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "./Button.component";
import { colors } from "../../constants/colors.constants";

afterEach(cleanup);

describe("Button", () => {
  it("Should render Button component correctly", () => {
    const { asFragment } = render(
      <Button buttonType={BUTTON_TYPE_CLASSES.base} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("check base button style", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.base}>Button</Button>);

    const ButtonElem = screen.getByText("Button");

    expect(ButtonElem).toHaveStyle({ backgroundColor: `${colors.base}` });
  });

  it("check grey button style", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.grayButton}>Button</Button>);

    const ButtonElem = screen.getByText("Button");

    expect(ButtonElem).toHaveStyle({ backgroundColor: `${colors.grey}` });
  });

  it("check red button style", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.redButton}>Button</Button>);

    const ButtonElem = screen.getByText("Button");

    expect(ButtonElem).toHaveStyle({ backgroundColor: `${colors.error}` });
  });

  it("check gradient button style", () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.gradientButton}>Button</Button>
    );

    const ButtonElem = screen.getByText("Button");

    expect(ButtonElem).toHaveStyle(
      `background: linear-gradient(90deg, ${colors.base2} 0%, ${colors.base} 100%)`
    );
  });

  it("check button disabled", () => {
    render(
      <Button disabled={true} buttonType={BUTTON_TYPE_CLASSES.base}>
        Button
      </Button>
    );

    const ButtonElem = screen.getByText("Button");

    expect(ButtonElem).not.toBeEnabled();
  });

  it("check button enabled", () => {
    render(
      <Button disabled={false} buttonType={BUTTON_TYPE_CLASSES.base}>
        Button
      </Button>
    );

    const ButtonElem = screen.getByText("Button");

    expect(ButtonElem).toBeEnabled();
  });
});

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ColorPicker, { colors } from "./ColorPicker.component";

afterEach(cleanup);

describe("ColorPicker", () => {
  let onPickColor = jest.fn();

  it("Should render ColorPicker component correctly", () => {
    const { asFragment } = render(
      <ColorPicker value="" onPickColor={onPickColor} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("check onPickColor function call with a value", () => {
    render(<ColorPicker value={colors[1].color} onPickColor={onPickColor} />);

    expect(onPickColor).toHaveBeenCalledTimes(1);
    expect(onPickColor).toHaveBeenCalledWith(colors[1].color);
  });

  it("check onPickColor function call", () => {
    render(<ColorPicker value="" onPickColor={onPickColor} />);
    const color = screen.getByTestId(`color-${colors[0].color}`);

    expect(onPickColor).toHaveBeenCalledTimes(1);
    expect(onPickColor).toHaveBeenCalledWith("");

    fireEvent.click(color);

    expect(onPickColor).toHaveBeenCalledTimes(2);
    expect(onPickColor).toHaveBeenCalledWith(colors[0].color);
  });
});

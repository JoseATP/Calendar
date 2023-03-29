import { ButtonHTMLAttributes, FC } from "react";
import {
  BaseButton,
  GradientButton,
  GrayButton,
  RedButton,
} from "./Button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  grayButton = "grayButton",
  redButton = "redButton",
  gradientButton = "gradientButton",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.grayButton]: GrayButton,
    [BUTTON_TYPE_CLASSES.gradientButton]: GradientButton,
    [BUTTON_TYPE_CLASSES.redButton]: RedButton,
  }[buttonType]);

export type ButtonProps = {
  backgroundColor?: string;
  buttonType?: BUTTON_TYPE_CLASSES;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  disabled,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={disabled} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;

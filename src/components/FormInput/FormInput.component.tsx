import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Group, Input } from "./FormInput.styles";

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && <FormInputLabel>{label}</FormInputLabel>}
      <Input {...otherProps} />
    </Group>
  );
};

export default FormInput;

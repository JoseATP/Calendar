/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from "react";
import { Color, ColorContainer, Container, Label } from "./ColorPicker.styles";

export const colors = [
  {
    index: 0,
    color: "#C8E6C9",
  },
  {
    index: 1,
    color: "#F5DD29",
  },

  {
    index: 2,
    color: "#FFCC80",
  },
  {
    index: 3,
    color: "#EF9A9A",
  },
  {
    index: 4,
    color: "#CD8DE5",
  },
  {
    index: 5,
    color: "#5BA4CF",
  },
  {
    index: 6,
    color: "#6DECA9",
  },
  {
    index: 7,
    color: "#FF8ED4",
  },
  {
    index: 8,
    color: "#BCAAA4",
  },
];

type PickerColorProps = {
  value: string;
  onPickColor: (color: string) => void;
};

const PickerColor: FC<PickerColorProps> = ({ value, onPickColor }) => {
  const [selectedColor, setSelectedColor] = useState(value);

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    onPickColor(selectedColor);
  }, [selectedColor]);

  return (
    <Container>
      <Label>Color</Label>
      <ColorContainer>
        {colors.map(({ index, color }) => (
          <Color
            data-testid={`color-${color}`}
            isSelected={selectedColor === color}
            key={index}
            color={color}
            onClick={(_) => handleSelectedColor(color)}
          />
        ))}
      </ColorContainer>
    </Container>
  );
};

export default PickerColor;

import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
`;

export const Label = styled.span`
  margin-bottom: 15px;
`;

type ColorProps = {
  color: string;
  isSelected: boolean;
};

export const Color = styled.div<ColorProps>`
  width: 10%;
  height: 50px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid rgba(49, 39, 37, 0.4);

  ${(props) =>
    props.isSelected &&
    css`
      border: 5px solid #101277;
    `}
`;

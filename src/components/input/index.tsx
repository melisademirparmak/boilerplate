import React, { FC } from "react";
import { StyledInput } from "./styles"

interface InputProps {
    type: string;
    borderColor?: 'black' | 'red' | 'blue';
    borderSize?: '1' | '3' | '5';
    borderStyle?: 'solid' | 'dashed' | 'none';
}

const Input: FC<InputProps> = ({
    type,
    borderColor,
    borderSize,
    borderStyle
}) => (
    <StyledInput borderColor={borderColor} borderSize={borderSize} borderStyle={borderStyle} type={type} />
)

export default Input;
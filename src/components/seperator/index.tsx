import React, { FC } from "react";
import { StyledSeperator } from "./styles"


interface ISeperator {
    marginTop?: '5' | '10' | '15'; 
    marginBottom?: '5' | '10' | '15'; 
}

const Seperator: FC<ISeperator> = ({ marginBottom, marginTop }) => (
    <StyledSeperator marginTop={marginTop} marginBottom={marginBottom}  />
);

export default Seperator;


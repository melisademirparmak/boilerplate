import React, { FC, ReactNode } from "react";
import { StyledRow } from './styles'

interface IRowProps {
    justifyContent?: string;
    alignItems?: string;
    flex?: number;
    children: ReactNode;
}

const Row: FC<IRowProps> = ({
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    flex = 1,
    children
}) => (
    <StyledRow
        justifyContent={justifyContent}
        flex={flex}
        alignItems={alignItems}
    >{children}</StyledRow>
);

export default Row;
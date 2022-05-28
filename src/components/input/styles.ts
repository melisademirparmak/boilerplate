import styled from "styled-components";

export const StyledInput = styled.input<{
    borderColor?: 'black' | 'red' | 'blue';
    borderSize?: '1' | '3' | '5';
    borderStyle?: 'solid' | 'dashed' | 'none';
}>`
border-color: ${(props) => props.borderColor};
border-width: ${(props) => props.borderSize}px;
border-style: ${(props) => props.borderStyle}
`;
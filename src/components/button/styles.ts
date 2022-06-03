import styled from "styled-components";

export const StyledButton = styled.button<{
    width: '50' | '75' | '100';
    height:'10'| '25' | '30' ;
    color?: 'black' | 'white' | 'red';
    backgroundColor: '#8A0303' | '#F9D71C' | '#008000';
}>`
width:${(props) => props.width }%;
height:${(props) => props.height }px;
color: ${(props) => props.color};
background-color:${(props) => props.backgroundColor};
border:1px solid ${(props) => props.backgroundColor}; 
border-radius:${(props) => props.width}px;
font-size:20px;
`;
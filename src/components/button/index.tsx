import React , {FC} from 'react';
import {StyledButton} from './styles';


interface IButton {
    text:string;
    width: '50' | '75' | '100';
    height:'10'| '25' | '30' ;
    color?: 'black' | 'white' | 'red';
    backgroundColor: '#8A0303' | '#F9D71C' | '#008000';
}

const Button: FC <IButton> = ({
text,
width,
height,
color,
backgroundColor
}) => (
    <StyledButton
    width={width}
    height={height}
    color={color}
    backgroundColor={backgroundColor}
    >{text}</StyledButton>
)

export default Button;
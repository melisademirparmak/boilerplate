import styled from 'styled-components';

export const StyledSeperator = styled.div<{
    marginTop?: '5' | '10' | '15'; 
    marginBottom?: '5' | '10' | '15'; 
}>`
margin-top: ${(props) => props.marginTop}px;
margin-bottom: ${(props) => props.marginBottom}px;
`;
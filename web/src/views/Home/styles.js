import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
`

export const FilterArea = styled.div `
display: flex;
width: 100%;
justify-content: space-around;
margin-top: 30px;

button {
    background: none;
    border: none;
    width: 100%;
    justify-content: space-around;
    margin-top: 30px;
    outline: none; //resetando config google chrome 
}
`
import styled from 'styled-components';

export const Container = styled.div`
width: 80%;
height: 60 px;
background: ${props => props.actived ? '#EE6B26' : '#20295F'};
padding: 10px;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-around;
border-radius: 5px;

img {
    width: 25px;
    height: 25px;
}

span {
    color:#FFF;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
}

&:hover{
    background: #EE6B26;
}

`
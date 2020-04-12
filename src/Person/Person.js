import React from 'react';
import styled from 'styled-components';
//import './Person.css';


const StyledDiv = styled.div`
    width : 60%;
    align-items : center;
    margin : 16px;
    border : 1px solid #ccc;
    box-shadow: 0 6px 3px #eee;
    padding : 16px;
    text-align: center;
    color : blue;
    background-color : yellow;
    
    @media (min-width: 500px) {
        background-color : #ccc; }
    
`;
const person = (props) => {
    const style = {
        '@media(min-width: 500px)' : {
            width : '450px'
        }
    };
    return(
        //<div className = 'Person'>
        <StyledDiv>
            <p onClick={props.click}>This is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} />
        </StyledDiv>
    )
};

export default person;
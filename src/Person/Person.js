import React from 'react';
import styled from 'styled-components';
import classes from './Person.css';

const person = (props) => {
    const style = {
        '@media(min-width: 500px)' : {
            width : '450px'
        }
    };
    const rnd = Math.random();
    console.log(rnd);

    if(rnd > 0.7){
        throw new Error('Something went wrong!!!!');
    }
    return(
        <div className = {classes.Person}>
        
            <p onClick={props.click}>This is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} />
        </div>
    )
};

export default person;
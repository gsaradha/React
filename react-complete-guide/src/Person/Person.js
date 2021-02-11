import React from 'react';
import classes from './Person.css';
/* import styled from 'styled-components';

const StyledDiv = styled.div `
width:60%;
margin:auto;
border:1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding:16px;
text-align: center;
margin-bottom: 10px;
}

@media (min-width:500px){
    width:450px;
}
`; */
const person=(props)=> {
    const rnd=Math.random();
    if(rnd > 0.7){
        throw new Error ('Something went wrong');
    }
    return (
        <div className = {classes.Person}>
        
        
            <p onClick={props.click}> I am {props.name} and {props.age} years old</p>
            <p> Hobbies : {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>


        </div>
    );
};

export default person;
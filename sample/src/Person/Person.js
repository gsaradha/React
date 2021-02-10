import React from 'react';

const person = (props) =>{
return (
    <div>
        <p onClick={props.clicked}> My name is {props.name} and {props.age} years old </p>
    </div>
)
}
export default person;
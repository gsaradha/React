import React,{Component} from 'react';
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
class Person extends Component{
 render(){
    /* const rnd=Math.random();
    if(rnd > 0.7){
        throw new Error ('Something went wrong'); */
        console.log("person Js rendering");
    return (
        <div className = {classes.Person}>
            <p onClick={this.props.click}> I am {this.props.name} and {this.props.age} years old</p>
            <p> Hobbies : {this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
    );
};
}
export default Person;
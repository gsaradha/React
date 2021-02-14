import React,{useEffect} from 'react';
import classes from './Cockpit.css';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

const cockpit = (props) => {
//combination of componentdidload and componentdid update

  useEffect(()=>{
    console.log("cockpit js use effect");
    setTimeout(()=>{
        alert('saved data to cloud');
    },1000)
    return()=>{
      console.log('cockpit cleanup');
    }
  },[])

    let assignedClasses = [];
    let btnClass= '';
    if(props.showPersons) {
        btnClass = classes.red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }    

    return (
        <div className={classes.cockpit}>
            <p>{props.title}</p>
            <p className={assignedClasses.join(' ')}>This is React App</p> 
            <button  className={btnClass} onClick={props.clicked}>Switch Name</button>   
            <UserOutput userName={props.userName}></UserOutput>
            <UserOutput userName={props.userName}>This is repetition</UserOutput>
            <UserInput userName={props.userName} onClick ={props.clickName}></UserInput>
           
     
        </div>
    );
}

export default React.memo(cockpit); 
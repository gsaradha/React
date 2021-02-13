import React, { Component } from 'react';
import classes from './App.css';
import UserOutput from '../components/UserOutput/UserOutput';
import UserInput from '../components/UserInput/UserInput';
import Persons from '../components/Persons/Persons';
/*const app = props => {
  const [personsState, setPersonsState] =useState({
    persons:[
      {name:'Max', age:28},
      {name:'Manu',age:29},
      {name:'stephanie',age:30}
    ]
  });

  const [otherState]=useState('some other value');
  
  const switchNameHandler = ()=>{
    setPersonsState({
      persons:[
      {name:'Saradha', age:28},
      {name:'Manu',age:29},
      {name:'stephanie',age:30}
    ],
    otherState:otherState
  });
  };

   return (
      <div className="App">
        <p>This is React App</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name}  age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].name} >I like racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].name} />
      </div>
    );
  */
 /* const StyledButton = styled.button `
 background-color:${props => props.alt ? 'red' :'green'};
 color:white;
 font:inherit;
 border:1px solid blue;
 padding:8px;
 cursor:pointer;
 marginBottom: 16px;

    &:hover{
      background-color:${props => props.alt ? 'salmon' :'green'};
      color:black;
    }
   ` */
  class App extends Component{

    state = {
      persons:[
        {id:'asd',name:'Max', age:28},
        {id:'bvf',name:'Manu',age:29},
        {id:'cds',name:'stephanie',age:30}
      ],
      otherState: 'some other value',
      username:'Ruby',
      showPersons:false
    }


    switchNameHandler = (newName) =>{
      this.setState({
        persons:[
          {name:'saradha', age:28},
          {name:newName,age:29},
          {name:'stephanie',age:27}
        ]
      })
    }

    nameChangedHandler = (event,id) =>{
        const personIndex = this.state.persons.findIndex((p)=>{
          return p.id === id;
        })

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons:persons
      })
    };

    changeUserNameHandler = (event) =>{
      console.log('clicked');
      this.setState({username:event.target.value});
    }

    togglePersonHandler =()=>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow})
    }

    deletePersonHandler =(index)=>{
        console.log("index=" + index);
        const persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons:persons});
    }
  
  render(){

    let persons=null;
    let btnClass = [classes.button]

    if(this.state.showPersons){
     persons=( <div>
       <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />
          </div> );
      
       /*  <Person 
            name={this.state.persons[0].name}  age={this.state.persons[0].age} />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={()=>this.switchNameHandler("Raj")}>I like racing</Person>
            <Person 
            name={this.state.persons[2].name} age={this.state.persons[2].name}
            changed={this.nameChangedHandler} />
 */
     

      //  btnClass.push(classes.red);
   /*  style.backgroundColor = 'red';
    style[':hover'] ={
      backgroundColor:'salmon',
      color:'black'
    } */
     
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }    


    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>This is React App</p>
{/*         <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Switch Name</StyledButton>
 */}  
          <button  className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Switch Name</button>   
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}>This is repetition</UserOutput>
        <UserInput userName={this.state.username} clicked ={this.changeUserNameHandler}></UserInput>
        {persons}
      </div>
    ); 
    /* return(
      React.createElement('div',{className: 'App'}, React.createElement('h1',null,'This is React app'))
    ); */
  }
}

export default App;


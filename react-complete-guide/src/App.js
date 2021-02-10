import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
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
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      marginBottom: '16px'
    }

    let persons=null;

    if(this.state.showPersons){
     persons=( <div>
       {this.state.persons.map((person, index)=>{
         return <Person 
         click = {()=>this.deletePersonHandler(index)}
         name={person.name} 
         age={person.age} 
         key = {person.id}
         changed={(event)=>{this.nameChangedHandler(event,person.id)}}/>
       })}
       {/*  <Person 
            name={this.state.persons[0].name}  age={this.state.persons[0].age} />
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={()=>this.switchNameHandler("Raj")}>I like racing</Person>
            <Person 
            name={this.state.persons[2].name} age={this.state.persons[2].name}
            changed={this.nameChangedHandler} />
 */}
      </div>);
    }




    return (
      <div className="App">
        <p>This is React App</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
  
            
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


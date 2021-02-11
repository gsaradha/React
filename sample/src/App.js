import './App.css';
import { Component,React } from 'react';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{
  state={
    persons:[
      {name:'saradha',age:32},
      {name:'radha',age:31},
      {name:'welter',age:30}
    ],
    enteredText : '',
    enteredTextLength: 0
  }

  switchHandler = ()=>{
    this.setState({
        persons:[
          {name:'max',age:32},
          {name:'radha',age:31},
          {name:'welter',age:30}
        ]
    })
  }

  changeNameHandler = ()=>{
    this.setState({
        persons:[
          {name:'giri',age:32},
          {name:'radha',age:36},
          {name:'welter',age:30}
        ]
    })

  }

  findLengthHandler =(event)=>{
    this.setState({
      enteredText : event.target.value,
      enteredTextLength : event.target.value.length
    });
  }
  
  deleteCharHandler=(index)=>{
      console.log("delete" + index);
      let userText = this.state.enteredText;
      const user = [...userText.split('')];
      user.splice(index,1);
      userText = user.join('');
      this.setState({
        enteredText: userText,
        enteredTextLength:userText.length
      })
  }
 
  render(){
      let userOutput = null;
      if(this.state.enteredText){
        //const userInput = this.state.enteredText;
        let user= [...this.state.enteredText.slice().split('')];
        console.log(user);
        userOutput  = (
          <div>
            {user.map((elt,index)=>{
                return <CharComponent char={elt} key={index}
                clicked={this.deleteCharHandler.bind(this,index)}></CharComponent>
            })
            }
          </div>
        );
      
  }
    return (
      <div className="App">
       
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
           <Person name={this.state.persons[1].name} clicked={this.changeNameHandler} age={this.state.persons[1].age}> This is the second person</Person>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            <button onClick={this.switchHandler}>Click Me</button>
            <input type="text" onChange={this.findLengthHandler} value={this.state.enteredText}/>
            <p >{this.state.enteredText}</p>
            <Validation len={this.state.enteredTextLength}></Validation>
            {userOutput}
            
      </div>
    );
  }
 
}

export default App;

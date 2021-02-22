import React, { Component } from 'react';
import Counter from './counter';

const zeroStyle={
    backgroundColor:"yellow",
    color:"grey"
}

const nonZeroStyle={
    backgroundColor:'blue',
    color:'white'
}

class Counters extends Component{
    state = {
        counter:[
        {id:1, value:'counter1' , count:4},
        {id:2, value:'counter2',count:0},
        {id:3, value:'counter3',count:0},
        {id:4, value:'counter4',count:0}
    ]}

    
    
    handleCounterIncrement=(id)=>{
        console.log(id);
       let stateCopy = {...this.state};
       const incrementedElt =  stateCopy.counter.filter((el)=> {
               if(el.id === id){
               el.count++;
           }
           return el;
       });
       console.log(incrementedElt);
       this.setState({
           counter:incrementedElt
       })
        
    }

    deleteElement=(id)=>{
        let stateCopy = {...this.state};
        const deletedElt =  stateCopy.counter.filter((el)=> el.id !== id);
        console.log(deletedElt);
         this.setState({
           counter:deletedElt
       })
    }

    
    
    render(){
        return(
            <div>
                <ul>
                 {this.state.counter.map((cnt,index)=>
                 {
                 return (
              
                 <li key={cnt.id}>
                 <Counter 
                 val={cnt.value}
                 onAddition={this.handleCounterIncrement.bind(this,cnt.id)}
                 onDeletion={this.deleteElement.bind(this,cnt.id)}
                 count={cnt.count}
                 styleClass = {cnt.count===0?zeroStyle:nonZeroStyle}
                 />
                 </li>)})}
                </ul> 
                <button onClick={this.renderStyle}>Render</button> 
            </div>   
        )
    }
}

export default Counters;

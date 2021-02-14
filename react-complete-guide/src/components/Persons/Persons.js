import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
        /* static getDerivedStateFromProps(props,state){
                console.log('Persons.js getDerivedStateFeomProps');
                return state;
        } */

        /* shouldComponentUpdate(nextProps, nextState){
                console.log('Persons.js Should Component Update');
                if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked){
                        return true;
                }
                else{
                        return false;
                } */
             
        
        getSnapshotBeforeUpdate(prevProps,prevState){
                console.log("persons.js getSnapshotBeforeUpdate")
                return null;
        }

        componentDidUpdate(){
                console.log("Persons.js Component Did Update")
        }
        render(){
        console.log("persons Js rendering")
        return this.props.persons.map((person, index)=>{
        return  <Person 
        click = {()=>this.props.clicked(index)}
        name={person.name} 
        age={person.age} 
        key = {person.id}
        changed={(event)=>{this.props.changed(event,person.id)}}
        />
});
};
}

export default Persons;
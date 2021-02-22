import React, { Component } from 'react';

class Counter extends Component{
    render(){
        const {val,count,onAddition,onDeletion,styleClass} = this.props;
        {console.log("style" +JSON.stringify(styleClass));}
        return(
            <div>
                <h1>{val}</h1>
                <span style={styleClass} className="badge badge-secondary">{count}</span>
                <button className="btn btn-primary m-2" onClick={onAddition}>Add</button>
                <button className="btn btn-danger m-2" onClick={onDeletion}>Delete</button>

            </div>
        )
    }
}


export default Counter;



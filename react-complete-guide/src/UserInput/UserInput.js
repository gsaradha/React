import React from 'react';

const userInput = props =>{
    const style={
        width:'40%',
        border:'1px solid black',
        height:'20px'
    }
    return (
        <div>
            <input type="text" style={style} value={props.userName} onChange={props.clicked}/>
        </div>
        
    )
};

export default userInput
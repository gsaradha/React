import React from 'react';

const validation = (props) =>{
  
       const lengthOfText = props.len;
       let message =''
        if(lengthOfText > 5){
             message = 'Text too long';
        } else if(lengthOfText < 5){
            message = 'Text too short';
        }
   
    return (
        <div>
             <p>Length of text you enetered: {props.len}</p>
              Length Identified : {lengthOfText}
              { lengthOfText === 5 || lengthOfText === 0 ? null :
                <div>{message}</div>
              }
        </div>
    );
}

export default validation;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input (props) {

    const {text,inputEntered} = props

   
    // Sending State Up (props callback)
    function entered(event) {
        inputEntered(event);
    }

    
    return <input type="text" onKeyDown={entered} placeholder="What's next?"/>  
      
}

export default Input;
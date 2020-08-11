
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input (props) {

    const {id,text,inputEntered} = props

    // // controlled component
    // const [iname, setIname] = React.useState("");
    
    // function updateIname (event) {
        
    //     setIname(event.target.value)              
    //     console.log(event.target.value)
    // }
    
    // Sending State Up (props callback)
    function entered(target) {
        inputEntered(target);
    }

    // const [isEntered, setIsEntered] = React.useState(false);

    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //       console.log('do validate') 
          
    //       setIsEntered(true) 
    //       //setIname("")
    //     }
        
    //   }
    
      return <input id={id} type="text" onKeyDown={entered} placeholder="What's next?"/>
}

export default Input;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup,FormControl } from 'react-bootstrap';


function Input(props) {

    const {id,name,completed,onSubmit} = props

    const [text, setText] = React.useState("");
    const [index, setIndex] = React.useState(0);
   
    let j = index 


    const myStyle = {
        "fontWeight": "bold",         
         "fontSize": "x-large"       
    }

  
    function handleChange(event) {

        setText(event.target.value)
        
    }

    function handleSubmit(event) {

        event.preventDefault();

        // sending the callback props to parent and submit new 'todo'      
        onSubmit({
            id:index,
            name:text,
            completed:false
        })
                   
        
        j=j+1
        setIndex(j) // counter for the next id props
        setText("")   // clean the input field after 'enter'

        
    }

    return (
       <div className="flex todo">
         <form onSubmit={handleSubmit}>

           <input name="text"  value={text} onChange={handleChange} placeholder="What's next?"/>
          
         </form>            
        
        </div>
    )
}

export default Input;
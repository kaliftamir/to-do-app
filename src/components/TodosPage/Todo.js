import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup,FormControl } from 'react-bootstrap';

function Todo(props) {

    const {toggleDone,deleteTodo} = props

    const myStyle = {
        "fontWeight": "bold",         
         "fontSize": "x-large"       
    }

    return (

         // 'todo' was sent from the paraent in oredr to use it here (props.todo.completed) and below ({props.todo.name)
        <div className={props.todo.completed ? "flex checked" : "flex"}>

           <div>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox  onClick={toggleDone}/>
                </InputGroup.Prepend>
                <FormControl style={myStyle} value={props.todo.name} readOnly/>  
                <label onClick={deleteTodo}>X</label>
            </InputGroup>

            </div>
          

        </div>               
      
                  
       
    )
}

export default Todo;



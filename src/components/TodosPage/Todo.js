import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup,FormControl } from 'react-bootstrap';
// import TodosPage from './components/TodosPage';

function Todo(props) {

    const {name,toggleDone} = props

    const myStyle = {
        "fontWeight": "bold",         
         "fontSize": "x-large"       
    }

    return (


        <div className={props.todo.completed ? "checked" : ""}>

           <div>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={toggleDone}/>
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" style={myStyle} value={props.todo.name}/>
                <label>X</label>
            </InputGroup>

            </div>
          

        </div>               
      
                  
       
    )
}

export default Todo;



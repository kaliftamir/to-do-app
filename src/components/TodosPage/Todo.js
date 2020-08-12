import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup,FormControl } from 'react-bootstrap';


function Todo(props) {

    const {id,text} = props
    const myStyle = {
        "font-weight": "bold",         
         "font-size": "x-large"       
    }


    return (
       <div>
            <InputGroup id={id} className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with checkbox" style={myStyle} value={text} onChange={()=>text} />
            </InputGroup>
        
        </div>
    )
}

export default Todo;
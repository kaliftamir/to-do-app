import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup,FormControl } from 'react-bootstrap';


function Todo() {



    return (
       <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        
        </div>
    )
}

export default Todo;
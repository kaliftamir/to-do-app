import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup,FormControl } from 'react-bootstrap';


function Todo(props) {

    const {id,text,inputChecked} = props
    const myStyle = {
        "fontWeight": "bold",         
         "fontSize": "x-large"       
    }

    // Sending State Up (props callback)
    function checkedFunc(event) {
        inputChecked(event);
    }

    return (
       <div className="flex todo">
            <InputGroup id={id} className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={checkedFunc}/>
                </InputGroup.Prepend>
                <FormControl className="look" aria-label="Text input with checkbox" style={myStyle} value={text} onChange={()=>text} />
                <label>X</label>
            </InputGroup>
            
        
        </div>
    )
}

export default Todo;
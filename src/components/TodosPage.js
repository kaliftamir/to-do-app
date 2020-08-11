import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';


function TodosPage() {

    const [iname, setIname] = React.useState("");
    
    function updateIname (event) {
        setIname(event.target.value) 
        console.log(iname) 
    }



    return (
       <div className="container">
           <h2>Todos</h2>
           <input value={iname} onChange={updateIname} placeholder="What's next?"/>
           <Todo/>
           <Todo/>
           <Todo/>
       </div>
    )
}

export default TodosPage;
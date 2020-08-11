import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';


function TodosPage() {



    return (
       <div className="container">
           <h2>Todos</h2>
           <input placeholder="What's next?"/>
           <Todo/>
           <Todo/>
           <Todo/>
       </div>
    )
}

export default TodosPage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';
import { Button } from 'react-bootstrap';
import Input from './TodosPage/Input';



function ToDoPage() { 

   
    
    const [todos, setTodos] = React.useState([]);   
    const [counter, setCounter] = React.useState(0);
    const [filteredTodos, setFilteredTodos] = React.useState("all");

   
    let i = counter 
    
    

    
    function addTodo(todo) {

        const newTodos = [todo, ...todos] // copy of 'todos' array
        setTodos(newTodos) 
        i++
        setCounter(i)        
        console.log(todos)
        console.log(todo.text)  
    }  
 
    // deals with checkbox of each 'todo'
    function toggleDone(id) {
        
        setTodos(todos.map(todo => {
            if(todo.id===id) {

                // update the counter
                if(todo.completed===true) {

                    i++

                } else {

                    i--
                }
                
                setCounter(i) 

                // if was checked - spesific 'todo'
                return {
                    id:todo.id,
                    name:todo.name,
                    completed:! todo.completed //  toggle logic
                };


                } else {
                    return todo;  // do nothing
                }

            })
        );
    }; 

    // function that filters the todos list by the button

    let newTodos=[] 

    if(filteredTodos==="all") {

        newTodos=todos

    } else if(filteredTodos==="completed") {

        newTodos=todos.filter(todo => todo.completed)

    } else if (filteredTodos==="active") {

        newTodos=todos.filter(todo => !(todo.completed))
        
    }

    // update the state for the relevant clicking
    function toShow(string) {  
                
       setFilteredTodos(string) 
        console.log(filteredTodos)
        
    }


  
    // delete all todos that not completed and user press on X 
    function handleDelete(id,todo) {
        
        if(todo.completed===true) {
                        
            setTodos(todos.filter(todo=> todo.id !==id)) // delete todo that was completed
        } else {

            setTodos(todos.filter(todo=> todo.id !==id)) // delete todo that was not completed
            i--   
            setCounter(i)  // update counter
            alert("incomplete task was deleted")

        }

    }



    return (
       <div className="container">
           <div className="header">
            <h1>Todos</h1>        
           </div>
            
            <Input onSubmit={addTodo}/>
           
            {newTodos.map(todo=>(

            <Todo key={todo.id}
             id={todo.id} todo={todo}
             deleteTodo={()=>handleDelete(todo.id,todo)} //  callback props
             toggleDone={()=>toggleDone(todo.id)}/>

             ))}

             {/* in the line abouve passing 'todo' instaed of name={todo.name} */}

           <div className="row nav">

            <p>{`${counter} items left`}</p>
            <div  className="navBtn">
                <Button onClick={()=>toShow("all")} variant="outline-dark">All</Button>
                <Button onClick={()=>toShow("active")}variant="outline-dark">Active</Button>
                <Button onClick={()=>toShow("completed")}variant="outline-dark">Completed</Button>
            </div>    

           </div>
           

       </div>
    )
}

export default ToDoPage;
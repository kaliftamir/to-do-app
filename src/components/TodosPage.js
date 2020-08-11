import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';
import Input from './TodosPage/Input';


function TodosPage() {    

    // controlled component
    const [iname, setIname] = React.useState("");
    
    function updateIname (event) {
        
        setIname(event.target.value)              
        console.log(event.target.value) 
        
    }

    // Getting props callback from Input component (child)
    const [isEntered, setIsEntered] = React.useState(false);

   
    function handleKeyDown (event) {

        if (event.key === 'Enter') {
          console.log('was entered') 
           
          setIsEntered(true) 
        
          setIname(event.target.value)
          event.target.value=""          
          
        }
        
    }
     
    // Array to render
    const toDoArr = [<Todo onChange={updateIname} text={iname}/>];
        

    return (
       <div className="container">
           <h2>Todos</h2>
        
           <Input inputEntered={handleKeyDown}/>
           {toDoArr}
       </div>
    )
}

export default TodosPage;
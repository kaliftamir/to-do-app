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

    // Array to render
    
    let toDoArr = [];
    let i = 0
    for(let j=0;j<=3;j++) {
        toDoArr.push(<Todo id={j} onChange={updateIname} text={iname}/>)
    }

    // Getting props callback from Input component (child)
    const [isEntered, setIsEntered] = React.useState(false);

   
    function handleKeyDown (event) {

        if (event.key === 'Enter') {
          console.log('was entered') 

          toDoArr.push(<Todo onChange={updateIname} text={iname}/>)
          console.log(toDoArr) 
           
          setIsEntered(true) 
        
          setIname(event.target.value)
          event.target.value="" 
          setIsEntered(false)         
          
        }
        
    }
     

        

    return (
       <div className="container">
           <h2>Todos</h2>
        
           <Input inputEntered={handleKeyDown}/>
           {toDoArr}
       </div>
    )
}

export default TodosPage;
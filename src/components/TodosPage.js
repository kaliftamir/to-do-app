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
   
    // for(let j=0;j<=3;j++) {
    //     toDoArr.push(<Todo id={j} onChange={updateIname} text={iname}/>)
    // }

    
    const [toRender, setToRender] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    let toDoArr = [toRender];
    let i = counter
   
    // Getting props callback from Input component (child)
    function handleKeyDown (event) {

        if (event.key === 'Enter') {
          console.log('was entered')          
      
          toDoArr.push(<Todo key={i} id={i} text={event.target.value }/>) 
          i++       

          setToRender(toDoArr)          
          setCounter(i)          
          console.log(toRender)
          event.target.value=""        
          
        }        
               
    }     

    return (
       <div className="container">
           <h2>Todos</h2>
        
           <Input inputEntered={handleKeyDown}/>           
           {toRender}
           <p>{`${counter} items left`}</p>
       </div>
    )
}

export default TodosPage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';
import Input from './TodosPage/Input';
import { Button } from 'react-bootstrap';


function TodosPage(props) { 

    const {checked} = props
    

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
    const [isChecked, setIsChecked] = React.useState("");
    let toDoArr = [toRender];
    let i = counter
   
    // Getting props callback from Input component (child)
    function handleKeyDown (event) {

        if (event.key === 'Enter') {
          console.log('was entered')          
      
          toDoArr.push( 
          <Todo key={i} id={i} checked={isChecked} text={event.target.value} inputChecked={handleCheckbox}/>)
  
          i++       

          setToRender(toDoArr)          
          setCounter(i)          
          console.log(toRender)
          event.target.value=""     
          
        }        
               
    } 


    
    
    
    
    // Getting props callback from Todo component (child)
    function handleCheckbox (event) {

        const i = event.target.checked;

        setIsChecked(event.target.checked) 
        console.log(i)
        //console.log(isChecked)
    }

  

    return (
       <div className="container">
           <div className="header">
            <h1>Todos</h1>        
            <Input inputEntered={handleKeyDown}/>
           </div>
                      
           {toRender}

           <div className="row nav">

            <p>{`${counter} items left`}</p>
            <div  className="navBtn">
                <Button variant="outline-dark">All</Button>
                <Button variant="outline-dark">Active</Button>
                <Button variant="outline-dark">Completed</Button>
            </div>    

           </div>
           

       </div>
    )
}

export default TodosPage;
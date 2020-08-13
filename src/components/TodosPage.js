import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';
import Input from './TodosPage/Input';
import { Button } from 'react-bootstrap';


function TodosPage(props) { 

    const {checked} = props
    

    // controlled component
    const [iname, setIname] = React.useState("");
    //const [ibox, setIbox] = React.useState(false);
    
    
    function updateIname (event) {
        
        setIname(event.target.value)              
        console.log(event.target.value) 
        //setIbox(event.target.checked)
        //console.log(event.target.checked) 
    }

    // Array to render    
   
    // for(let j=0;j<=3;j++) {
    //     toDoArr.push(<Todo id={j} onChange={updateIname} text={iname}/>)
    // }

    
    const [toRender, setToRender] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    const [isChecked, setIsChecked] = React.useState("");

    let toDoArr = toRender;
    let i = counter

    
  let toDoToRender = toRender.map(todo => 

    <div key={todo.i}>     
                      
      <Todo id={todo.i} text={iname} inputChecked={handleCheckbox}/>
    
    </div>);

    function allBtn() { 
      let all = toRender
      setToRender(all) 
      
    }
   
    // Getting props callback from Input component (child)
    function handleKeyDown (event) {

        if (event.key === 'Enter') {
          console.log('was entered')          
      
          // Todo (props) - onChange={updateIname} checked={isChecked}
          toDoArr.push(           

             <Todo key={i} id={i} text={iname} inputChecked={handleCheckbox}/>

          )   

          i++        
          
          setToRender(toDoArr)          
          setCounter(i)
          setIname(event.target.value) 
          event.target.value="" 

          //console.log(toDoArr)
          console.log(toRender)
          console.log(toDoToRender)
          console.log(i)
          console.log(event.target.value)
              
          
        }  
              
               
    }    

       
    
    // Getting props callback from Todo component (child)
    function handleCheckbox (event) {

        const isCheked = event.target.checked;
        if (isCheked===true) {

            setCounter(i=i-1)
        } else {

            setCounter(i=i+1)

        }
        
        console.log(counter)
        setIsChecked(event.target.checked) 
        console.log(isCheked)
        console.log(event.target)
    }

  

    return (
       <div className="container">
           <div className="header">
            <h1>Todos</h1>        
            <Input inputEntered={handleKeyDown}/>
           </div>
                      
           {toRender}
           {toDoToRender}

           <div className="row nav">

            <p>{`${counter} items left`}</p>
            <div  className="navBtn">
                <Button onClick={allBtn} variant="outline-dark">All</Button>
                <Button variant="outline-dark">Active</Button>
                <Button variant="outline-dark">Completed</Button>
            </div>    

           </div>
           

       </div>
    )
}

export default TodosPage;
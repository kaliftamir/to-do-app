import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './TodosPage/Todo';
import Input from './TodosPage/Input';
import { Button } from 'react-bootstrap';


function TodosPage() { 

    //const {checked} = props
    

    // controlled component
    const [iname, setIname] = React.useState("");
    
    function updateIname (event) {
        
        setIname(event.target.value)              
        console.log(event.target.value) 
    }

    
    const [toRender, setToRender] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    const [isChecked, setIsChecked] = React.useState("");  
   

    let toDoArr = toRender;
    let i = counter

    
  let toDoToRender = toRender.map((todo) => 

    <div key={todo.i} className={isChecked}>     
                      
      <Todo id={todo.props.i} text={todo.props.text} inputChecked={handleCheckbox}/>
    
    </div>);

  
    function allBtn() { 
      let all = toRender//.map((item)=> item.id)
      setToRender(all)
      console.log(all) 
      
    }
   
    // Getting props callback from Input component (child)
    function handleKeyDown (event) {

        if (event.key === 'Enter') {
          console.log('was entered')          
      
          // Todo (props) - onChange={updateIname} checked={isChecked}
          toRender.push( 
           
            <Todo key={i} id={i} text={event.target.value} inputChecked={handleCheckbox} />
           
          )   

          i++        
          
          setToRender(toDoArr)          
          setCounter(i)
          setIname(event.target.value) 
          event.target.value="" 

          //console.log(toDoArr)
          console.log(toRender)
          //console.log(toDoToRender)
          console.log(i)
          console.log(event.target.value)              
          
        }               
               
    }    

    
    
    // Getting props callback from Todo component (child)
    function handleCheckbox (event) {

        
        if (event.target.checked===true) {

            console.log('is checked') 
            event.target.className="checked" 

            setCounter(i=i-1)
            setIsChecked("checked")
            
        } else {

            setCounter(i=i+1)
            event.target.className="un-checked"
            setIsChecked("")
           
        }
        
        console.log(counter)
       
        //console.log(event.target.checked)
        //console.log(event.target.className)
        console.log(isChecked)
    
    }

  

    return (
       <div className="container">
           <div className="header">
            <h1>Todos</h1>        
            <Input inputEntered={handleKeyDown}/>
           </div>
                      
           {/* {toRender} */}
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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodosPage from './components/TodosPage';


class App extends React.Component {

 
  render() {
    return (
      <div>
        <TodosPage/>
        
      </div>
    );

  }
}

export default App;

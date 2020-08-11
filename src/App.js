import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodosPage from './components/TodosPage';

class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     cars: []
  //   }

  // }

  // componentDidMount() {

  //   axios.get("cars.json").then(response => {
  //     // console.log(response.data);
  //     this.setState({
  //       cars: response.data.map(plainCar => new CarModel(plainCar.brand, plainCar.model, plainCar.year, plainCar.km))
  //     })
  //   })

  // }


  render() {
    return (
      <div>
        {/* If I redner something before the router it will be rendered always (in any route) */}
        {/* <p>bla bla bla</p> */}
        {/* <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/cars">
              <CarsView cars={this.state.cars} />
            </Route>
            <Route exact path="/cars/:id">
              {this.state.cars.length > 0 ? <CarDetails cars={this.state.cars} /> : null}
            </Route>
          </Switch>
        </HashRouter> */}

        <TodosPage/>
      </div>
    );

  }
}

export default App;

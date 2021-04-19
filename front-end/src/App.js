import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import MarketPlace from './Pages/MarketPlace'
import UserPage from './Pages/UserPage'


class App extends React.Component {
  state = {
    items: [],
    addItem: false,
    currentItem: {},
  }

  //Backend Requests
  getItems = () => {
    fetch("route for backend")
    .then(r => r.json())
    .then(data => {
      this.setState({items: data.items})
    })
  }


  render(){
    return (
      <div>
        <div>
          <h1>Welcome to Jankazon</h1>
        </div>
        <Switch>  
            <Route exact path="/marketplace" component={MarketPlace}/>
            <Route exact path="/users/:id" component={UserPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;

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
    fetch("http://127.0.0.1:9393/items/")
    .then(r => r.json())
    .then(data => {
      console.log(data.items)
      this.setState({items: data.items})
    })
  }

  componentDidMount = () => {
    this.getItems()
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

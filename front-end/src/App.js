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
    currentUser: {},
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
            <Route exact path="/marketplace" render={()=> {
              return <MarketPlace items={this.state.items}/>
            }}/>
            <Route exact path="/users/:id" render={()=> {
              return <UserPage currentUser={this.state.user} items={this.state.items}/>
            }}/>
        </Switch>
      </div>
    )
  }
}

export default App;

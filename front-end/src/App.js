import React from 'react';
import {Route, Switch} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
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
          <h1 className="ui header">Welcome to Jankazon</h1>
        </div>
        <Switch>  
            <Route exact path="/marketplace" render={()=> {
              return <MarketPlace items={this.state.items}/>
            }}/>
            <Route exact path="/users/:id" render={()=> {
              return <UserPage currentUser={this.state.currentUser} items={this.state.items}/>
            }}/>
        </Switch>
      </div>
    )
  }
}

export default App;

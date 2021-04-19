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

  //
  handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      name: e.target.name.value,
      image: e.target.image.value,
      seller_id: e.target.seller_id.value,
      category_id: e.target.category_id.value,
      description: e.target.description.value,
      price: e.target.price.value,
      condition: e.target.condition.value
    }

    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "POST",
      body: JSON.stringify(newItem)
    }

    fetch("http://127.0.0.1:9393/items/", reqPackage)
    .then(res => res.json())
    .then(item => {
      this.setState({
        items: [...this.state.items, item],
        addItem: !this.state.addItem
      })
    })
  }

  handleClick = () => {
    let addNewItem = !this.state.addItem
    this.setState({
      addItem: addNewItem
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
              return <UserPage currentUser={this.state.user} items={this.state.items} handleClick={this.handleClick} handleSubmit={this.handleSubmit} addItem={this.state.addItem}/>
            }}/>
        </Switch>
      </div>
    )
  }
}

export default App;

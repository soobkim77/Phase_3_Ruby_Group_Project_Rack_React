import React from 'react';
import {Route, Switch} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
import './App.css';
import MarketPlace from './Pages/MarketPlace'
import UserPage from './Pages/UserPage'
import LogIn from './Components/LogIn'


class App extends React.Component {
  state = {
    items: [],
    users: [],
    addItem: false,
    login: true,
    currentItem: {},
    currentUser: {},
    isLoggedIn: false,
    user: {
      username: "",
      password: "",
      id: ""
    },
  }

  //Backend Requests
  getItems = () => {
    fetch("http://127.0.0.1:9393/items/")
    .then(r => r.json())
    .then(data => {
      this.setState({items: data.items})
    })
  }

  getUsers = () => {
    fetch("http://127.0.0.1:9393/users/")
    .then(r => r.json())
    .then(data => {
      console.log(data.users)
      this.setState({users: data.users})
    })
  }

  handleUsernameChange = (e) => {
    this.setState({user: {...this.state.user, username: e.target.value}})
  }

  handlePasswordChange = (e) => {
    this.setState({user: {...this.state.user, password: e.target.value}})
  }

  validateUser = (e) => {
    e.stopPropagation()
    e.preventDefault()
    let users = this.state.users
    let correctUser = users.find(user => user.username === this.state.user.username)
    if (correctUser){
      if (correctUser.password === this.state.user.password){
      this.setState({isLoggedIn: true, currentUser: correctUser, login: true})
    }
    else {
      alert('Incorrect Password, Please Try Again')
    }
  }
  else{ alert("Username not found, Please Try Again")}
  }

  componentDidMount = () => {
    this.getItems()
    this.getUsers()
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
          <button onClick={() => {this.setState({login: false})}}>LogIn</button>
          {this.state.login ? 
          
          null 
          
          : 
          
          <LogIn user={this.state.user} handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange}  handleLogin={(e) => this.validateUser(e)} />} 
        <h1 className="ui header">Welcome to Jankazon</h1>
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

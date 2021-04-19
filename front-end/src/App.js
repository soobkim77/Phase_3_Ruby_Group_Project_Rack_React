import React from 'react';
import {Route, Switch} from 'react-router-dom'
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


  render(){
    return (
      <div>
        <div>
          <button onClick={() => {this.setState({login: false})}}>LogIn</button>
          {this.state.login ? 
          
          null 
          
          : 
          
          <LogIn user={this.state.user} handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange}  handleLogin={(e) => this.validateUser(e)} />} 
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

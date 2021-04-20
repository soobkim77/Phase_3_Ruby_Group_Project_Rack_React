import React from 'react';
import {Route, Switch} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
import './App.css';
import MarketPlace from './Pages/MarketPlace'
import UserPage from './Pages/UserPage'
import LogIn from './Components/LogIn'
import NavBar from './Components/NavBar'


class App extends React.Component {
  state = {
    items: [],
    users: [],
    addItem: false,
    login: true,
    createUser: true,
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
    // e.stopPropagation()
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

  createUser = (e) => {
    e.preventDefault()
    let allUsers = this.state.users
    let duplicateUser = allUsers.find(user => user.username === this.state.user.username)
    let newUser = {
      name: this.state.user.username,
      password: this.state.user.password
    }
    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)}
    if(duplicateUser){
      alert('Username Already Exists')
    }
    else{
    fetch('http://127.0.0.1:9393/users/', reqPackage)
      .then(r => r.json())
      .then(data => {
        alert("User created, please log in to continue!")
        this.setState({
          users: [...this.state.users, data],
          login: true,
          createUser: true
        })
      })
    }
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
      seller: e.target.seller.value,
      category: e.target.category.value,
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

    .then(data => {
      console.log(data)
      this.setState({
        items: [...this.state.items, data],
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


  itemsByUser = () => {
    let items =  this.state.items.filter(item => item.seller.id == this.state.currentUser.id)
    return items
  }


  render(){
    return (
      <div>
        <NavBar user={this.state.currentUser}/>
        
        <div>
          <button onClick={() => {this.setState({login: false, createUser: true})}}>LogIn</button>
          <button onClick={() => {this.setState({createUser: false, login: true})}}>Create User</button>
          {this.state.login ? 
          
          null 
          
          : 
          
          <LogIn log={this.state.login} user={this.state.user} handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange}  handleLogin={(e) => this.validateUser(e)} />} 
          {this.state.createUser ?
          null
          :
          <LogIn log={this.state.login} user={this.state.user} handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange}  handleLogin={(e) => this.createUser(e)} />
          }
        </div>
        <h1 className="ui header">Welcome to Jankazon</h1>
        <Switch>  
            <Route exact path="/marketplace" render={()=> {
              return <MarketPlace items={this.state.items} />
            }}/>
            <Route exact path="/users/:id" render={()=> {
              return <UserPage currentUser={this.state.user} handleClick={this.handleClick} handleSubmit={this.handleSubmit} addItem={this.state.addItem} items={this.itemsByUser()}/>
            }}/>
        </Switch>
      </div>
    )
  }
}

export default App;

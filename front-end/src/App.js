import React from 'react';
import './App.css';


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
        <h1>Welcome to Jankazon</h1>
      </div>
    )
  }
}

export default App;

import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import MarketPlace from './Pages/MarketPlace'
import UserPage from './Pages/UserPage'


class App extends React.Component {
  state = {

  }

  render(){
    return (
      <div>
        <Switch>  
          <Route exact path="/marketplace" component={MarketPlace}/>
          <Route exact path="/users/:id" component={UserPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;

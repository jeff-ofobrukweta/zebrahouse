import React, { Component } from 'react';
import Signup from './signup/signup';
import {Route,Switch} from 'react-router-dom';
import Transactions from './Transaction/Transactions'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/transactions" component={Transactions}/>
        <Route path="/" exact component={Signup}/>
      </Switch>
      </div>
    );
  }
}

export default App;

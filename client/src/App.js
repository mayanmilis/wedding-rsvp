import React, { Component } from 'react';
import Dashboard from './Components/Dashboard'
import List from './Components/List'
import {BrowserRouter, Route} from 'react-router-dom'
import SignIn from './Components/SignIn'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/list' component={List}/>
        <Route path='/signin' component={SignIn}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

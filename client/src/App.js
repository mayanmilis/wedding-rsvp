import React, { Component } from 'react';
import Dashboard from './Components/Dashboard'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path='/' component={Dashboard}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

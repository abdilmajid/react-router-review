import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import User from './component/User'

class App extends Component {
//To use router need to wrap main tag with wrapper tag  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => {
                return (
                <h1>Welcome Home</h1>
                )}}/>
          <Route  path='/about' exact render={() => {
                return (
                <h1>About page</h1>
                )}}/>
          <Route  path='/users' exact render={() => {
                return (
                <User />
                )}}/>            
        </div>
      </Router>
    );
  }
}
//Route-> '/' (default path) loads 'Welcome Home'
//Route->'/about' (about page) loads
// ** need to include 'exact' or multiple paths render

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import User from './component/User';
import Users from './component/Users';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }

//to toggle login state
  isLoggedIn = () => {
    this.setState(prevState => ({ 
      loggedIn: !prevState.loggedIn
    }))
  }


//To use router need to wrap main tag with wrapper tag  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => {
                return (<h1>Welcome Home</h1>)}}/>
          <Route  path='/about' exact render={() => {
                return (<h1>About page</h1>)}}/>
          <Route  path='/users' exact render={() => {
                return (<User />)}}/>   
          {/* <Route  path='/users/:username' exact strict component={Users}  render={() => {
                return (<User />)}}/> */}
          <Route  path='/users/:username' exact strict render={({match}) => (this.state.loggedIn ? (<Users username={match.params.username} />) : (<Redirect to='/'/>))}/>{
        // Create Links to different pages
}         <NavLink to='/' exact activeStyle={{color:'green'}}>Home</NavLink> <br/>
          <NavLink to='/about' exact activeStyle={{color:'green'}}>About</NavLink><br/>
          <NavLink to='/users/john' exact activeStyle={{color:'green'}}>John</NavLink><br/>
          <NavLink to='/users/peter' exact activeStyle={{color:'green'}}>Peter</NavLink> <br/>
          <Prompt 
            when={!this.state.loggedIn}
            message={(loc) => {
              return loc.pathname.startsWith('/user') ? 'Please Login': true
            }}
            />
            <input type='button' value={this.state.loggedIn ? 'log Out' : 'log In'} onClick={this.isLoggedIn}/>
        </div>
      </Router>
    );
  }
}
//Route-> '/' (default path) loads 'Welcome Home'
//Route->'/about' (about page) loads
// ** need to include 'exact' or multiple paths render
// ** You can pass Comonents to routes 
// NavLink ->activeStyle means when link is clicked on it will have a specific style
//Login => Need to prevent going to specific route without being logged in. Once logged in then can go to route -> We use Redirect for this. Instead of using a component when redirecting[ component={Users} ] we use turnary to check state => render={() => this.state.loggedIn ? (output if true): (output if false)}
// Prompting a user => gives promp when you have a given state and your going to a certain page/pages. Need to use function for message to not get 2 prompts

export default App;

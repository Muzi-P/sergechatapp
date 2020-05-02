import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import dasboard from './components/dashboard/dasboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }  
  
  render() {
      return (
        <BrowserRouter>
        <div >
          <Switch>
            <Route exact path='/' component ={dasboard}/>
            <Route  path='/signin' component ={SignIn}/>
            <Route  path='/signup' component ={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>
      );
  }
}


export default App;

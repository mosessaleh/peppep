import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Home from './Containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import VL from './Containers/VL';
import Biler from './Containers/Biler';
import Drivers from './Containers/Drivers';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props}/>} />
          <Route path='/home' exact render={(props) => <Home {...props}/>} />
          <Route path='/vl' exact render={(props) => <VL {...props}/>} />
          <Route path='/biler' exact render={(props) => <Biler {...props}/>} />
          <Route path='/drivers' exact render={(props) => <Drivers {...props}/>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

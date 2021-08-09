import React from 'react'
import './App.css';
import { Friends } from './friend'
import { Contect } from './Contect'
import { Switch, Route } from 'react-router-dom'
import { About } from './About'
import { Admin } from './Admin';
import { Home } from './Home';

export const Routes = () => {
  return (
    < >


      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/frd" component={Friends} />
        <Route exact path="/About" component={About} />
        <Route path="/Contact" component={Contect} />
      </Switch>

    </>

  )
}

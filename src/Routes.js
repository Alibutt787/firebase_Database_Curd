import React from 'react'
import './App.css';
import { Home } from './Home'
import { Contect } from './Contect'
import { Switch, Route, Link } from 'react-router-dom'
import { About } from './About'
import { Admin } from './Admin';

export const Routes = () => {
  return (
    < >

      <div className="dropdown" style={{ float: 'right', margin: '10px'  }}>
        <button className="dropbtn">down</button>
        <div className="dropdown-content"  >
          <span>   <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/Admin">Admin</Link> </span>
          <span>   <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/">Home</Link> </span>
          <span>  <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/About">About</Link></span>
          <span>  <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/Contact">Contact</Link></span>
        </div>
      </div>

      <Switch>
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route path="/Contact" component={Contect} />
      </Switch>

    </>

  )
}

import React from 'react'
import { Link} from 'react-router-dom'
import './App.css';
import Fade from 'react-reveal/Fade';

export const Header = () => {
    return (
        <div className="ali">
          <Fade top>
      <div className="dropdown" style={{ float: 'right', margin: '10px'  }}>
        <button className="dropbtn">down</button>
        <div className="dropdown-content"  >
        <span>   <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/">Home</Link> </span>
        <span>   <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/frd">Friends</Link> </span>
          <span>   <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/Admin">Admin</Link> </span>
          <span>  <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/About">About</Link></span>
          <span>  <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to="/Contact">Contact</Link></span>
        </div>
      </div>
      </Fade>
        </div>
    )
}

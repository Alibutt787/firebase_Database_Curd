import React from 'react'
import firebase from './firebase/firebase';
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
// import {Link , Switch, Route} from 'react-router-dom'
// import {Home} from './Home'
// import {About} from './About'

export const Contect = () => {
  
  const auth= firebase.auth();
  console.log(auth);

    return (
      
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center' , width:'100%'}}>
          <Fade bottom>
          <div style={{marginTop:'100px'}}> <h4 > Follow me <a style={{color:'#0A66C2'}} href="https://pk.linkedin.com/in/aqib-ali-butt-a75086208"><b>LinkedIn</b></a>  </h4>
        <span> Go Back to   <Link style={{ color:'green'}} to="/"> <b>Home</b></Link> </span>
         </div>
             {/* <Link style={{textDecoration:'none'}} to="/contact/Main">Main</Link>
          <Link style={{textDecoration:'none'}} to="/contact/home">Home</Link>
         <Switch>
          <Route exact path="/contact/Main" component={Home} />
          <Route exact path="/contact/home" component={About} />
          </Switch> */}


</Fade>
        </div>
    )
}

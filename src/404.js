import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {  BiError } from 'react-icons/bi'
import {  FaHome } from 'react-icons/fa'
import pic from './images/error.png'


// import {Link , Switch, Route} from 'react-router-dom'
// import {Home} from './Home'
// import {About} from './About'

export const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Fade bottom>
        <div className="info" style={{ marginTop: "40px",fontSize:'20px', }}>
        <h1><span style={{borderBottom:'5px solid #4a9efc'}}>Page </span>Error    <BiError/></h1>
       
 
    <img src={pic} alt="Trulli" width="250px" />
    <br/>
          <span>
            Go Back to
            <Link style={{ color: "green" ,textDecoration:'none'}} to="/">
              <b><FaHome/></b>
            </Link>{" "}
          </span>
        </div>
      
      </Fade>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub,FaHome } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import {  MdPhoneInTalk } from 'react-icons/md'


// import {Link , Switch, Route} from 'react-router-dom'
// import {Home} from './Home'
// import {About} from './About'

export const Contect = () => {
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
        <h1><span style={{borderBottom:'5px solid #4a9efc'}}>Get In </span>Touch</h1>
       <div style={{textAlign:'left' ,marginLeft:'15%'}}>
        <p><ImLocation2/>  DASKA,SIALKOT PUNJAB PAKISTAN
        <br/>
        <MdPhoneInTalk /> <a href="tel:+923314113737"> Aqib Ali Butt</a>
        </p>
      </div>
         <h4>Fellow me on </h4>
       
              <div>
 <div className="IconDiv" >
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'red'}}  href="https://www.instagram.com/aqibalibutt1/"> <FaInstagram/></a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'black' }} href="https://github.com/Alibutt787"> < FaGithub/></a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'#0e76af',}} href="mailto:aqibbuttbutt7867@gmail.com"> <GrMail/> </a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'#1Da1f2'}} href="https://google.com"> <FaTwitter/></a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'#0e76af',}} href="https://www.linkedin.com/in/aqib-ali-butt-a75086208/"> <FaLinkedinIn/> </a>
 </div>
 <br/>
          </div>
          <span>
            Go Back to
            <Link style={{ color: "green" ,textDecoration:'none'}} to="/">
              <b><FaHome/></b>
            </Link>{" "}
          </span>
        </div>
        {/* <Link style={{textDecoration:'none'}} to="/contact/Main">Main</Link>
          <Link style={{textDecoration:'none'}} to="/contact/home">Home</Link>
         <Switch>
          <Route exact path="/contact/Main" component={Home} />
          <Route exact path="/contact/home" component={About} />
          </Switch> */}
      </Fade>
    </div>
  );
};

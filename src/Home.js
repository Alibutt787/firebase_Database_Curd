import React from "react";
import "./App.css";
import { Fade } from "react-reveal";
import ReactTypingEffect from 'react-typing-effect';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export function Home() {
  return (
    <div
      style={{
        marginBottom: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Fade bottom>
        <div >
          <div className="info " >
                 <div className="author"></div>
         
            <div className="typing"> <h3> I,m <b style={{color:'#FC1056' ,lineHeight:'0px'}}>Aqib Ali Butt</b></h3>  <ReactTypingEffect

        text={["React.js Developer, JavaScript Learning Enthusiast. Always learning."]}
        speed={100}
        eraseSpeed={80}
      /></div>
 <div className="IconDiv" >
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'red'}}  href="https://www.instagram.com/aqibalibutt1/"> <FaInstagram/></a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'black' }} href="https://github.com/Alibutt787"> < FaGithub/></a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'#1Da1f2'}} href="https://google.com"> <FaTwitter/></a>
   <a className="zoomIcon" style={{textDecoration:'none' ,color:'#0e76af',}} href="https://www.linkedin.com/in/aqib-ali-butt-a75086208/"> <FaLinkedinIn/> </a>
 </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

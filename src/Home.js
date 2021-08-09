import React from "react";
import './App.css'
import { Fade } from "react-reveal";
 
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
       
      <div class="info">
      <a  href="https://twitter.com/nodws" target="_b" class="author"></a><br/>
    By <a href="https://twitter.com/nodws" target="_b">James Nodws</a> on May 30, 2019
  <h4><a href="#category">UI DESIGN</a></h4>
    <h1>KEN BURNS HEADERS ARE THE BEST</h1>
  
  </div>

      </div>

    
    </Fade>
  </div>
  );
}


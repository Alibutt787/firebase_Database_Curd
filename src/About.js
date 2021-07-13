import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center' , width:'100%'}}>
          <div style={{marginTop:'100px'}}> <h4 > Coming Soon ! Go to </h4>
        <span> Go Back to   <Link style={{ color:'green'}} to="/"> <b>Home</b></Link> </span>
        </div>
        </div>
    )
}

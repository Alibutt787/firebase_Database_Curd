import React from 'react'
import firebase from 'firebase';
import { Link } from 'react-router-dom'

export const About = () => {
  function upload(e){
    const filesrc=e.target.files[0];
  const ref = firebase.storage().ref(`images/${filesrc.name}`);
    ref.put(filesrc);
  
    setTimeout(() => {
   firebase.storage().ref(`images/${filesrc.name}`).getDownloadURL().then((url)=>{console.log(url)
   document.getElementById('pic').src=url;
   var text = document.createElement('img');
   text.src=url;
   text.width=250;
   text.height=150;
   text.alt="picture";
document.getElementById('pic').appendChild(text);
  
  }
   );
 
    }, 12000);
   
}
    return (
        
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center' , width:'100%'}}>
          <div  id='pic' style={{marginTop:'60px'}}> 
          <input type="file" name="Picture"  onChange={(e)=>upload(e)}  required />
          <br/>
          <br/>
          <br/>
        <span> Go Back to   <Link style={{ color:'green'}} to="/"> <b>Home</b></Link> </span>
        <br/>
      
        </div>
        </div>
    )
}

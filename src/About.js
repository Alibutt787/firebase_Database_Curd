import firebase from 'firebase';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const About = () => {
    


  useEffect(() => {
    
    var storageRef = firebase.storage().ref();
    var listRef = storageRef.child('images');
    console.log(listRef);
    listRef.listAll().then(function(result){
        result.items.forEach(function(imgRef){imgRef.getDownloadURL().then(url=>{
            
            document.getElementById('pic').src=url;
            var text = document.createElement('img');
            text.src=url;
            text.width=250;
            text.height=150;
            text.alt="picture";
         document.getElementById('pic').appendChild(text);
    
  


        })}) 
      
      })
  });
 

  function upload(e){
    const filesrc=e.target.files[0];
    console.log(filesrc.size);
    toast.info(`Your File of ${Math.floor(filesrc.size/1000)}Mb is upload!🚀🚀`, {
      position: "top-center",
      autoClose: 12000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
   
      });
 
  const ref = firebase.storage().ref(`images/${filesrc.name}`);
  ref.put(filesrc).then((e)=>
  
     {   console.log(e);
   firebase.storage().ref(`images/${filesrc.name}`).getDownloadURL().then((url)=>{
    toast.success('yahoo! file is uploaded 😄  ', {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });


      document.getElementById('pic').src=url;
      var text = document.createElement('img');
      text.src=url;
      text.width=250;
      text.height=150;
      text.alt="picture";
   document.getElementById('pic').appendChild(text);


  
  }
   );
 
    });
   
}
    return (
        
        <div style={{marginBottom:'70px',display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center' , width:'100%'}}>
          <div id='pic' style={{marginTop:'60px'}}> 
          <input type="file" name="Picture"  onChange={(e)=>upload(e)}  required />
          <br/>
          <br/>
        
 
       </div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
Transition={Zoom}
/>
<span> Go Back to   <Link style={{ color:'green'}} to="/"> <b>Home</b></Link> </span>
        <br/>
        </div>
    )
}

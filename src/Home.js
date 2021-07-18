import React, { useEffect, useState,useRef } from 'react'
import firebase from './firebase/firebase';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Home = () => { 

// console.log(firebase)
    const [data , setdata]= useState('');
  
    const [showData , setShowData]= useState();
    
    const inputRef = useRef();
   
    const buttonclick=()=>{
      const obj={data ,}
      if(data){
      const ref =firebase.database().ref("Todo"); ref.push(obj);
  setdata('');

  toast.success('Story added Successfully 🕺💃  ', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

      }
  }

useEffect(() => {
  inputRef.current.focus();
  const ref =firebase.database().ref("Todo"); 
  ref.on('value', (e)=>{  
    const data_database= e.val();
    const arry =[];
    for(let id in data_database){
      arry.push({id, ...data_database[id]});
    }
    setShowData(arry);
 
    } );
    
 
}, []);


    return (
        <div  style={{display:'flex', justifyContent:'center', textAlign:'center' , width:'100%',marginBottom:'100px'}} >
          <div  >
   <h2>  Stories</h2>
   <form  onSubmit={buttonclick}>
  <input ref={inputRef} style={{height:'32px',width:'70%', borderRadius:'10px'}} type="text" 
   value={data} onChange={(e)=>setdata(e.target.value) }   placeholder="Enter your Story.."  required/>
  <button style={{height:'40px',width:'25%', borderRadius:'10px',backgroundColor:'#228BE6'}} >Enter</button>
</form>
  { showData? showData.map((val, ind)=> { return <div style={{ textAlign:'left', backgroundColor:'white',opacity:'.7'}} key={ind}>
    <p  className="qcont">{val.data}</p>
    <button onClick={()=>{
      const password=prompt(`Enter password to Delete \n " ${val.data} " `);
      console.log(password);
      if(password==='786'){
      const refy =firebase.database().ref("Todo").child(val.id);
      refy.remove();
    
      toast.info('Story is Deleted Successfully 🧛🧛  ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    
    
    }else{ alert("Your Password is incorrect")}
  }}>Delete</button>
    </div>}):''}

        </div>
        <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
Transition={Zoom}
/>
        </div>
    )
}

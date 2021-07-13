import React, { useEffect, useState } from 'react'
import firebase from './firebase/firebase';



export const Home = () => { 
// console.log(firebase)
    const [data , setdata]= useState('');
  
    const [showData , setShowData]= useState();
    const buttonclick=()=>{
      const obj={data ,}
      if(data){
      const ref =firebase.database().ref("Todo"); ref.push(obj);
  setdata('');
      }
  }

useEffect(() => {
  
  const ref =firebase.database().ref("Todo"); 
  ref.on('value', (e)=>{  
    const data_database= e.val();
    const arry =[];
    for(let id in data_database){
      arry.push({id, ...data_database[id]});
    }
    setShowData(arry);
    console.log(arry);
    } );
}, []);
    return (
        <div  style={{display:'flex', justifyContent:'center', textAlign:'center' , width:'100%'}} >
          <div  >
   <h2>  Stories</h2>
  <input style={{height:'32px',width:'70%', borderRadius:'10px'}} type="text"  value={data} onChange={(e)=>setdata(e.target.value)}  placeholder="Enter your Story.."/>
  <button style={{height:'40px',width:'25%', borderRadius:'10px',backgroundColor:'#228BE6'}} onClick={buttonclick}>Enter</button>
  { showData? showData.map((val, ind)=> { return <div style={{ textAlign:'left', backgroundColor:'white',opacity:'.7'}} key={ind}>
    <p  className="qcont">{val.data}</p>
    <button onClick={()=>{
      const password=prompt(`Enter password to Delete \n " ${val.data} " `);
      if(password==='786'){
      const refy =firebase.database().ref("Todo").child(val.id);
      refy.remove();}else{ alert("Your Password is incorrect")}
  }}>Delete</button>
    </div>}):''}
        </div>
        </div>
    )
}

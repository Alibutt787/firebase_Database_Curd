import React,{useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";
import "./App.css";
import { FaUserLock } from 'react-icons/fa'



export const Admin = () => {

  const [email, setemail]=useState("");
  const [pwd, setpwd]=useState("");

  function functionclick(e) {
 e.preventDefault();
  
    alert (`Wrong Email  ${email} and Password ${pwd}`);

  }
  return (
    <div
      style={{
        marginBottom: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        opacity: '.9'
      }}
    >
      <div className="container">
        <Fade bottom>
          <div className="card">
            <div className="card-image">
              <div className="card-heading"></div>
            </div>
          <span>  <b style={{borderBottom:'5px solid #4a9efc'}}>Admin </b> panal <FaUserLock/></span>

            <form className="card-form" onSubmit={functionclick}>
              <div className="input" style={{ textAlign: "left" }}>
                <label className="input-label">User Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="AliButt12@gmail.com"
                  onChange={e=>setemail(e.target.value)}
                  required
                />
              </div>

              <div
                className="input"
                style={{ textAlign: "left", marginBottom: "10px" }}
              >
                <label className="input-label">Password</label>
                <input type="password" className="input-field" required
                    onChange={e=>setpwd(e.target.value)}
                />
              </div>

              <div className="action">
                <button style={{width:'100px', height:'40px',borderRadius:'20px' ,backgroundColor:'#4495d4'}} className="action-button"><b>Get started</b></button>
              </div>
            </form>
            <div className="card-info">
              <p>
                By signing up you are agreeing to our
                <a href="https://google.com">Terms and Conditions</a>
              </p>
            </div>
          </div>
        </Fade>

      
      </div>
     
      
    </div>
  );
};

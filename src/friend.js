import React, { useEffect, useState, useRef } from "react";
import firebase from "./firebase/firebase";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";

export const Friends = () => {
  // console.log(firebase)
  const [data, setData] = useState("");
  const buttonclick = () => {
    const obj = { data:data, time:new Date().toLocaleString() };
    if (data) {
      const ref = firebase.database().ref("Todo");
      ref.push(obj);
      toast.success("Story added Successfully 🕺💃  ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setData("");
    }
  };
  const inputRef = useRef();
  const [showData, SetShowData] = useState();
  useEffect(() => {
    inputRef.current.focus();
    const ref = firebase.database().ref("Todo");
    ref.on("value", (e) => {
      const data_database = e.val();
     const array = [];
     console.log('database',data_database);
      for (let id in data_database) {
        array.push({ id, ...data_database[id] });
      }
     const arrty= array.reverse()
     SetShowData(arrty);
   
  
    });
  },[] );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        marginBottom: "100px",
      }}
    >
      <div  className="frd">
        <Fade top>
         
        <h1><span style={{borderBottom:'5px solid #4a9efc'}}>Friends  </span> Stories</h1>
          <form onSubmit={buttonclick}>
            <input
            className="storyInput"
              ref={inputRef}
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter New Story.."
              required
            />
            <button 
              style={{
                height: "45px",
                width: "30%",
                borderRadius: "10px",
                backgroundColor: "#228BE6",
              }}
            >
              Enter
            </button>
          </form>
        
        </Fade>
        <Fade bottom>
      <div>
          {showData
            ?  showData.map((val, ind) => {
                return (
                  <div className="fireRealTime"
                 
                    key={ind}
                  >
                    <p className="qcont">{val.data}</p>
                    <i style={{fontSize:'10px', position:'absolute', bottom:'0px',right:'10px'}}>Upadated <b>{val.time}</b></i>
                    <button className="fireDataBtn"
                      onClick={() => {
                        const password = prompt(
                          `Enter Security Key to Delete \n " ${val.data} " `
                        );
                        if (password === "9998") {
                          const refy = firebase
                            .database()
                            .ref("Todo")
                            .child(val.id);
                          refy.remove();

                          toast.info("Story is Deleted Successfully 🧛🧛  ", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        } else if (password !== "9998") {
                          toast.warn("Incorrect Password 🧛  ", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : <h4><span style={{borderBottom:'4px solid red'}}>Share Story</span>World</h4>}
            </div>
        </Fade>
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
  );
};



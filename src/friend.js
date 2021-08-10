import React, { useEffect, useState, useRef } from "react";
import firebase from "./firebase/firebase";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";

export const Friends = () => {
  // console.log(firebase)
  const [data, setData] = useState("");

  const [showData, setShowData] = useState();

  const inputRef = useRef();

  const buttonclick = () => {
    const obj = { data };
    if (data) {
      const ref = firebase.database().ref("Todo");
      ref.push(obj);
      setData("");

      toast.success("Story added Successfully 🕺💃  ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    inputRef.current.focus();
    const ref = firebase.database().ref("Todo");
    ref.on("value", (e) => {
      const data_database = e.val();
      const arry = [];
      for (let id in data_database) {
        arry.push({ id, ...data_database[id] });
      }
      setShowData(arry);
    });
  }, []);

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
         
        <h1><spa style={{borderBottom:'5px solid #4a9efc'}}>Friends  </spa> Stories</h1>
          <form onSubmit={buttonclick}>
            <input
              ref={inputRef}
              style={{ height: "32px", width: "70%", borderRadius: "10px" }}
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter your Story.."
              required
            />
            <button 
              style={{
                height: "44px",
                width: "20%",
                borderRadius: "10px",
                backgroundColor: "#228BE6",
              }}
            >
              Enter
            </button>
          </form>
        
        </Fade>
        <Fade bottom>
          {showData
            ? showData.map((val, ind) => {
                return (
                  <div className="fireRealTime"
                 
                    key={ind}
                  >
                    <p className="qcont">{val.data}</p>
                    <button className="fireDataBtn"
                      onClick={() => {
                        const password = prompt(
                          `Enter password to Delete \n " ${val.data} " `
                        );
                        console.log(password);
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
            : ""}
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

import firebase from "firebase";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";
import { FaHome,FaDownload } from "react-icons/fa";

export const Gallery = () => {
  useEffect(() => {
    var storageRef = firebase.storage().ref();
    var listRef = storageRef.child("images");
    listRef.listAll().then(function (result) {
      result.items.forEach(function (imgRef) {
        imgRef
          .getDownloadURL()
          .then((url) => {
            document.getElementById("pic").src = url;
            var text = document.createElement("img");
            text.src = url;
            text.width = 250;
            text.height = 150;
            text.alt = "picture";
            document.getElementById("pic").appendChild(text);
          })
          .catch((e) => {
            toast.info(`Pictures is downloading...`, {
              position: "center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          });
      });
    });
  });

  function upload(e) {

    const filesrc = e.target.files[0];

    toast.info(
      `Your File of ${Math.floor(filesrc.size / 1000)}Mb is upload!🚀🚀`,
      {
        position: "top-center",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    );

    const ref = firebase.storage().ref(`images/${filesrc.name}`);
    ref.put(filesrc).then((e) => {
      firebase
        .storage()
        .ref(`images/${filesrc.name}`)
        .getDownloadURL()
        .then((url) => {
          toast.success("yahoo! file is uploaded 😄  ", {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          document.getElementById("pic").src = url;
          var text = document.createElement("img");
          text.src = url;
          text.width = 250;
          text.height = 150;
          text.alt = "picture";
          document.getElementById("pic").appendChild(text);
        })
        .catch((e) => {
          toast.info(`sorry File is not uploaded.`, {
            position: "top-center",
            autoClose: 12000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        });
    });
  }
  return (
    <div
      style={{
        marginBottom: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "100%"
      }}
    >
      <div className="info" style={{ marginTop: "20px",maxWidth:'1200px' }}>
        <Fade top>
        <h3><span style={{borderBottom:'5px solid #4a9efc'}}>Gallery</span>  <FaDownload/></h3>
       <input  style={{height:'60px'}}
            type="file"
            name="Picture"
            onChange= {(e) => {
                const password = prompt(
                  `Plz Enter Security key `
                );
                console.log(password);
                if (password === "551") {
               upload(e);
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
            required
          />
        
          <br />
          <br />
        </Fade>
        <Fade bottom>
          <div id="pic"></div>
        </Fade>
        <span>
         Back to
        <Link style={{ color: "green" }} to="/">
        
          <b><FaHome/></b>
        </Link>
      </span>
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
     
      <br />
    </div>
  );
};

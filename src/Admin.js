import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";
import './App.css'

export const Admin = () => {
  
  function functionclick() {
    toast.error("Your Email or password is Incorrect ❌❌  ", {
      position: "top-center",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
        width: "100%",

      }}
    >
    
        <div className="container">
        <Fade bottom>
          <div className="card">
            <div className="card-image">
              <div className="card-heading"></div>
            </div>
            <span>Admin Panal</span>
            <form className="card-form" onSubmit={functionclick}>
              <div className="input" style={{ textAlign: "left" }}>
                <label className="input-label">User Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="AliButt12@gmail.com"
                  required
                />
              </div>

              <div
                className="input"
                style={{ textAlign: "left", marginBottom: "10px" }}
              >
                <label className="input-label">Password</label>
                <input type="password" className="input-field" required />
              </div>

              <div className="action">
                <button className="action-button">Get started</button>
              </div>
            </form>
            <div className="card-info">
              <p>
                By signing up you are agreeing to our{" "}
                <a href="https://google.com">Terms and Conditions</a>
              </p>
            </div>
          </div>
          </Fade>
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
     
    </div>
  );
};

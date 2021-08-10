import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Fade } from "react-reveal";
import { HiMenu } from "react-icons/hi";
import { FaUserFriends ,FaUserAlt,FaKey } from "react-icons/fa";
import { TiHome  } from "react-icons/ti";
import { MdContacts  } from "react-icons/md";
import { ImFilePicture  } from "react-icons/im";


export const Header = () => {
  return (
    <div className="ali">
      <Fade top>
        <div className="dropdown" style={{ float: "right", margin: "10px" }}>
          <button className="dropbtn"><HiMenu  className="dropbtcol"/></button>
          <Fade right>
            <div className="dropdown-content">
              <span>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                  to="/"
                >
                  Home <TiHome/>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                  to="/frd"
                >
                  Friends <FaUserFriends/>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                  to="/Admin"
                >
                  Admin <FaUserAlt/><FaKey/>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                  to="/pics"
                >
                  My Pics <ImFilePicture/>
                </Link>
              </span>
              <span>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "20px",
                  }}
                  to="/Contact"
                >
                  Contact <MdContacts/>
                </Link>
              </span>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

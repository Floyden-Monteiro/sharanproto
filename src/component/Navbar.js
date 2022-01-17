import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import Pulse from "react-reveal/Pulse";
import Slide from "react-reveal/Fade";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-custom ">
      <div className="container-fluid">
        <Pulse>
          <Link className="navbar-brand" to="/">
           Sharan Karanth
          </Link>
        </Pulse>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Slide right>
            <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth className="nav-link nav-linka" to="#div">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linka" to="#projects">
                PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linka" to="#contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  <button type="button" class="btn btn-outline-success">
                    RESUME
                  </button>
                </Link>
              </li>
            </ul>
          </Slide>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

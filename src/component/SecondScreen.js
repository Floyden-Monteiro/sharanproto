import React from "react";
import Fade from "react-reveal/Fade";
import github from "./github.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import "./SecondScreen.css";

function SecondScreen() {
  return (
    <div>
      <div className="container">
        <div className="socialmediafixed">
          <Fade left>
            <ul className="socialmedia">
              <li>
                <a
                  href="https://github.com/Sharan112001"
                  target="_blank"
                  className="a"
                >
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a className="a" href="https://instagram.com/_s.hara.n_?utm_medium=copy_link"
                target="_blank">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a
                  href=" https://twitter.com/sharankaranth7?t=eG4feh7sxDm-n-yYG58nZQ&s=08"
                  
                  target="_blank"
                  className="a"
                >
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="a"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
                <div class="vl"></div>
              </li>
            </ul>
          </Fade>
        </div>

        <div className="myemailfixed">
          <Fade right>
            <div className="myemail">
              <a
                className="email"
                onClick={() =>
                  (window.location = "mailto:sharankaranth7@gmail.com")
                }
              >
               sharankaranth7@gmail.com
              </a>
              <div class="v2"></div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default SecondScreen;

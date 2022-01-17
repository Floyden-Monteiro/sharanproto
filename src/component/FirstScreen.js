import React from "react";
import "./FirstScreen.css";
import Fade from "react-reveal/Fade";
import SecondScreen from "./SecondScreen";
import SecondPage from "./SecondPage";
import ThreedPage from "./ThreedPage";
import ContactPage from "./ContactPage";
import { Link } from "react-router-dom";

function FirstScreen() {
  return (
    <div>
      <div className="homebody">
        <Fade top>
          <div className="firsttext">Hi, my name is</div>
        </Fade>
        <div className="secondtext">
        <Fade top>
          <h2>Sharan karanth</h2>
          </Fade>
        </div>
        <Fade top>
          <div className="threedtext ">
            <h3>I build things for the web.</h3>
          </div>
        </Fade>
        <div className="para">
          <Fade top>
            <p>
              I’m a software Developer and Student , Currently I’m focused
              on building Websites and Apps which are helpful for  human-centered products where we can experience interactive features.
            </p>
          </Fade>
        </div>
      </div>

      <SecondScreen />
      <SecondPage />
      <ThreedPage />
      <ContactPage />
    </div>
  );
}

export default FirstScreen;

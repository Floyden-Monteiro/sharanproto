import React from "react";
import "./ThreedPage.css";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import folder from "./folder.png";
import git from "./github.png";

function ThreedPage() {
  return (
    <div id="projects" className="threed">
      <div className="procontainer">
        <div className="projt">
          <Fade top duration={2000}>
            <h1 className="proh1">PROJECTS</h1>
          </Fade>
        </div>
        <div className="cardcontainer">
          <div className="cardrow1 row ">
            <Fade top>
              <div className="item1 col-sm">
                <div className="folder">
                  <a
                    href="https://github.com/Floyden-Monteiro/e-backend"
                    target="_blank"
                  >
                    <img className="fold" src={folder} alt="" />
                  </a>
                  <a
                    href="https://github.com/Floyden-Monteiro/e-backend"
                    target="_blank"
                  >
                    <img className="git1" src={git} alt="" />
                  </a>
                </div>
                <h3 className="projectitle">
                  <a
                    href="https://github.com/Floyden-Monteiro/e-backend"
                    target="_blank"
                    className="proa"
                  >
                    RESTful API for E-commerce platforms
                  </a>
                </h3>
                <p className="prop">
                  Dyanamic Web API With Authentication and Authorization
                </p>
                <ul className="cardfooter">
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>MongoDb</li>
                </ul>
              </div>
              <div className="item1 col-sm">
                <div className="folder">
                  <img className="fold" src={folder} alt="" />
                  <img className="git1" src={git} alt="" />
                </div>
                <h3 className="projectitle">
                  <a
                    href="https://github.com/Floyden-Monteiro/Mern"
                    className="proa"
                    target="_blank"
                  >
                    T-shirt Selling E-commerce Website
                  </a>
                </h3>
                <p className="prop">
                  Mern Stack Website with Authentication, Authorization and
                  Payment Gateway
                </p>
                <ul className="cardfooter">
                  <li>React</li>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>MongoDb</li>
                </ul>
              </div>
              <div className="item1 col-sm">
                <div className="folder">
                  <img className="fold" src={folder} alt="" />
                  <img className="git1" src={git} alt="" />
                </div>
                <h3 className="projectitle">
                  <a
                    href=" https://sharan112001.github.io/textutils//"
                    className="proa"
                    target="_blank"
                  >
                    Text Util
                  </a>
                </h3>
                <p className="prop">
                  convertin Text into required medium
                </p>
                <ul className="cardfooter">
                  <li>React</li>
                  <li>Bootstrap</li>
                  
                </ul>
              </div>
            </Fade>
          </div>
          <div className="cardrow2 row ">
            <Fade top>
              <div className="item1 col-sm">
                <div className="folder">
                  <img className="fold" src={folder} alt="" />
                  <img className="git1" src={git} alt="" />
                </div>
                <h3 className="projectitle">
                  <a
                    href="https://infallible-albattani-7ec0f8.netlify.app/"
                    className="proa"
                    target="_blank"
                  >
                    Tesla Website Clone
                  </a>
                </h3>
                <p className="prop">
                  Tesla Car booking website Clone with help of React,
                  React-Readux and Hookes
                </p>
                <ul className="cardfooter">
                  <li>React</li>
                  <li>React-Readux</li>
                </ul>
              </div>
              <div className="item1 col-sm">
                <div className="folder">
                  <img className="fold" src={folder} alt="" />
                  <img className="git1" src={git} alt="" />
                </div>
                <h3 className="projectitle">
                  <a
                    href="https://github.com/Sharan112001/react_news_app"
                    className="proa"
                    target="_blank"
                  >
                    News API
                  </a>
                </h3>
                <p className="prop">
                  Nwes website using React js
                </p>
                <ul className="cardfooter">
                  
                  <li>React</li>
               
                </ul>
              </div>
              
              <div className="item1 col-sm">
                <div className="folder">
                  <img className="fold" src={folder} alt="" />
                  <img className="git1" src={git} alt="" />
                </div>
                <h3 className="project-title">
                  <a
                    href="https://github.com/Floyden-Monteiro/COVID-19-CORONAVIRUS-TRACKER"
                    className="proa"
                    target="_blank"
                  >
                    COVID-CORONAVIRUS-TRACKER
                  </a>
                </h3>
                <p className="prop">
                  COVID case TRACKING realtime data with help of API
                </p>
                <ul className="cardfooter">
                  <li>React</li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreedPage;

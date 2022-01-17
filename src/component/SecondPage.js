import React from "react";
import "./SecondPage.css";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Roll";
import floyden from "./floyden.jpg";

function SecondPage() {
  return (
    <div id="div" className="div">
      <div children="abouttitle">
        <Fade left duration={2000}>
          <h2 className="aboutme">About Me </h2>
          <hr />
        </Fade>
      </div>
      <div>
        <table>
          <tr>
            <td className="lefttext">
              <p>
                <div className="mobilew">
                 
                  <Fade top>
                    Hello! My name is Sharan Karanth and I enjoy creating things that
                    live on the internet. My interest in web development started
                    back in 2019 Started learning  HTML & CSS! But the curiosity to learn more about it lead to explore many programming languages and scripting languages
                  </Fade>
                </div>
              </p>
              <p>
                <Fade top>
                  Here are a few technologies I’ve been working with recently:
                </Fade>
              </p>
              <ul>
                <div className="prgnm">
                  <div className="prg1">
                    <Fade top>
                      <li className="pr">JavaScript (ES6+)</li>
                      <li className="pr">React</li>
                      <li className="pr">Node.js</li>
                    </Fade>
                  </div>
                  <div className="prg2">
                    <Fade top duration={2000}>
                      <li className="pr">MongoDB</li>
                      <li className="pr">Python</li>
                      <li className="pr">Java</li>
                    </Fade>
                  </div>
                </div>
              </ul>
            </td>
            <Rotate right right>
              <td>
                <div className="floyden">
                  <img src={floyden} alt="" />
                </div>
              </td>
            </Rotate>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SecondPage;

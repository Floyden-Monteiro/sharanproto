import React from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function ContactPage() {
  return (
    <div id="contact">
      <Fade top>
        <div className="contactcontainer">
          <h2 className="h2a">Get In Touch</h2>
          <p className="contactp">
            Although I’m currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
          <Link
            onClick={() =>
              (window.location = "mailto:sharankaranth7@gmail.com")
            }
            className="contactbtn"
          >
            Say Hello
          </Link>
          <footer>
            <div className="fmfooter">
              <Link className="foottext">Designed & Built by Sharan karanth</Link>j
            </div>
          </footer>
        </div>
      </Fade>
    </div>
  );
}

export default ContactPage;

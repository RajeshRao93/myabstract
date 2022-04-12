import React from "react";
import { MDBIcon } from "mdbreact";
import "./Homepage.css";
import AboutMe from "./AboutMe";

const Homepage = () => {
  const linkedInUrl =
    "https://www.linkedin.com/in/rajesha-koppa-ramesha-0bbb45124/";
  const githubUrl = "https://github.com/RajeshRao93";
  const email = "rajesh.rao0593@gmail.com";
  return (
    <div className="homepage">
      <div className="welcome-section">Welcome!</div>
      <div className="profile-section">
        Find my profile on: <br />
        <MDBIcon fab icon="linkedin" />
        <a className="profiles" href={linkedInUrl}>
          LinkedIn
        </a>
        <br />
        <MDBIcon fab icon="github" />
        <a className="profiles" href={githubUrl}>
          Github
        </a>
        <br />
      </div>
      <div className="moving-clouds"></div>
      <div className="about-section">
        <AboutMe />
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="....">{email} </a>
        </p>
      </div>
    </div>
  );
};

export default Homepage;

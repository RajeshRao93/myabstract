import React, { useEffect } from "react";
import { MDBIcon } from "mdbreact";
import "./Homepage.css";
import AboutMe from "./AboutMe";
import getExchangeRates from "../action/converstionRates";

const Homepage = () => {
  useEffect(() => {
    setInterval(function () {
      getExchangeRates();
    }, interval);
  });

  const minutes = 60;
  const interval = minutes * 60 * 1000;

  const linkedInUrl = process.env.REACT_APP_LINKED_IN_URL;
  const githubUrl = process.env.REACT_APP_GIT_HUB_URL;
  const email = process.env.REACT_APP_EMAIL_ADDRESS;
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

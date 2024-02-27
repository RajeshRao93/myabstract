import React, { useEffect, useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const aboutMeText = "Click here to know about me!";
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (aboutMe.length < aboutMeText.length) {
        setAboutMe(aboutMe + aboutMeText[aboutMe.length]);
      }
    }, 50);
  }, [aboutMe]);

  const minutes = 60;
  const interval = minutes * 60 * 1000;

  const email = process.env.REACT_APP_EMAIL_ADDRESS;

  return (
    <div className="homepage">
      <div className="welcome-section">Welcome!</div>
      <div className="profile-section">
        <div>
          <a href="/aboutme" style={{ color: "white" }}>
            <h1>>{aboutMe}</h1>
          </a>
        </div>
      </div>

      <div className="moving-clouds"></div>
      <div className="copyright">
        <a href="https://www.hitwebcounter.com">
          Hits:
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7982168&style=0006&nbdigits=5&type=page&initCount=0"
            title="Free Counter"
            alt="web counter"
            border="0"
          />
        </a>
        <p>
          &copy; {new Date().getFullYear()} Copyright:
          <a>{email} </a>
        </p>
      </div>
    </div>
  );
};

export default Homepage;

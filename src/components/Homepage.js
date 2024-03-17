import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { Image } from "react-bootstrap";
import image from "../Images/RajeshPic.jpg";
import AboutMe from "./AboutMe";

const Homepage = () => {
  const defaultText = "Hey, I'm Rajesh";
  const aboutMeText = "I enjoy designing websites and writing code";
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (aboutMe.length < aboutMeText.length) {
        setAboutMe(aboutMe + aboutMeText[aboutMe.length]);
      }
    }, 50);
  }, [aboutMe]);

  const email = process.env.REACT_APP_EMAIL_ADDRESS;
  document.title = "Home";
  return (
    <div className="homepage">
      <div className="profile-section">
        <div className="intro">
          <h3 className="name-text">{defaultText}</h3>
          <h1 className="about-text">{aboutMe}</h1>
        </div>
        <div className="picture">
          <div className="about-section image">
            <Image style={{ width: "50%" }} src={image} roundedCircle />
          </div>
        </div>
      </div>

      <div className="moving-clouds"></div>
      <AboutMe />
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
      </div>
    </div>
  );
};

export default Homepage;

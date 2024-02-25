import React from "react";
import { Image } from "react-bootstrap";
import image from "../Images/RajeshPic.jpg";

const AboutMe = () => {
  return (
    <div className="about-section">
      <h1>About me</h1>
      <div className="about-section image">
        <Image style={{ width: "10%" }} src={image} roundedCircle />
      </div>
      <div className="about-section title">
        <h5>
          <strong>Rajesha KR</strong>
        </h5>
        <h5>Software Developer</h5>
      </div>
      <div className="about-section description">
        <strong className="card-description text-center">
          A passionate software developer fascinated with developing web
          applications.
          <br />
          Focussing on full stack development of web applications.
          <br />
          Contact me on email: rajesh.rao0593@gmail.com
        </strong>
      </div>
    </div>
  );
};

export default AboutMe;

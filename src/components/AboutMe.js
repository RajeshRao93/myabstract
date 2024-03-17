import React, { useState } from "react";
import { Image } from "react-bootstrap";
import progImg from "../Images/prog.jpg";
import skillsImg from "../Images/skills.png";

import "./AboutMe.css";
import { MDBIcon } from "mdbreact";
import { Carousel } from "react-bootstrap";

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const techSkills = [
    {
      division: "Frontend",
      skills: "Javascript, Typescript, React JS, Redux, HTML5, CSS",
    },
    {
      division: "Backend",
      skills: "C# .Net, REST APIs, Python Django, Microservices",
    },
    {
      division: "Database",
      skills: "MSSQL, PostgreSQL",
    },
    {
      division: "Tools",
      skills: "Docker, Visual Studio, Visual Studio code, Git, Azure Devops",
    },
  ];

  const projects = [
    {
      name: "Quizapp",
      desc: "QuizApp is a game of quiz as a web application built using ReactJS, Typescript.",
      gitLink: "https://github.com/RajeshRao93/Quiz-App",
      hostedLink: "https://quiz-appppp.netlify.app",
      language: "Typescript, ReactJS, HTML, CSS",
    },
    {
      name: "Prokart",
      desc: "ProKart is a sample e-commerce website built using ReactJS, Typescript and Material UI.",
      gitLink: "https://github.com/RajeshRao93/ProKart---e-commerce",
      hostedLink: "https://pro-kart.netlify.app",
      language: "Typescript, ReactJS, HTML, CSS",
    },
    {
      name: "Portfolio - Myabstract",
      desc: "My abstract website created using React JS, Javascript.",
      gitLink: "https://github.com/RajeshRao93/myabstract",
      hostedLink: "https://www.myabstract.in",
      language: "Javascript, ReactJS, HTML, CSS",
    },
    {
      name: "BonApp",
      desc: "It is customized restaurant app to view the restaurants avaialable in a specific area.",
      gitLink: "https://github.com/RajeshRao93/BonApp--Restaurant-app",
      hostedLink: "",
      language: "Javascript, ReactJS, HTML, CSS",
    },
    {
      name: "ExpenseDiary",
      desc: "A mobile app for keeping track of daily expenses.",
      gitLink: "https://github.com/RajeshRao93/ExpensesDiary",
      hostedLink: "",
      language: "Javascript, ReactNative, HTML, CSS",
    },
    {
      name: "Duckworth-Lewis-MethodServer",
      desc: "A server that calculates par score for interrupted cricket matches.",
      gitLink: "https://github.com/RajeshRao93/Duckworth-Lewis-MethodServer",
      hostedLink: "",
      language: "C# .NET",
    },
  ];

  const linkedInUrl = process.env.REACT_APP_LINKED_IN_URL;
  const githubUrl = process.env.REACT_APP_GIT_HUB_URL;

  return (
    <div className="about-container">
      <div className="about-section">
        <div className="step">
          <div className="about-left">
            <Image style={{ width: "60%" }} src={progImg} />
          </div>
          <div className="about-right">
            <h2 className="header">About me</h2>
            <h5>
              <strong>Rajesha Koppa Ramesha</strong>
            </h5>
            <div>
              <p>
                A passionate software developer fascinated with developing web
                applications.
                <br />
                Focussing on full stack development of web applications.
                <br />
                Contact me on email: <a href="">rajesh.rao0593@gmail.com</a>
              </p>
              Find my profile on: <br />
              <span>
                <MDBIcon fab icon="linkedin" />
                <a
                  className="profiles"
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;LinkedIn
                </a>
                <MDBIcon fab icon="github" />
                <a
                  className="profiles"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;Github
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="skill-left">
            <h2 className="header">Technical skills</h2>
            {techSkills.map((skill, i) => (
              <div key={i}>
                <span>
                  <b>{skill.division} :</b>
                  &nbsp;{skill.skills}
                </span>
              </div>
            ))}
          </div>
          <div className="skill-right">
            <Image style={{ width: "70%" }} src={skillsImg} />
          </div>
        </div>

        <div className="project-carousel">
          <div className="carousel-nav" onClick={handlePrev}>
            &lt;
          </div>
          <div className="projects">
            <h2 className="header">Projects</h2>
            <Carousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              interval={null}
            >
              {projects.map((project, index) => (
                <Carousel.Item key={index}>
                  <div className="project-card">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.desc}</p>
                    {project.hostedLink != "" && (
                      <a
                        href={project.hostedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                      >
                        View Demo
                      </a>
                    )}
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-link"
                    >
                      Github Link
                    </a>
                    <p className="project-description">
                      <MDBIcon fas icon="laptop-code" />
                      &nbsp;{project.language}
                    </p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="carousel-nav" onClick={handleNext}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

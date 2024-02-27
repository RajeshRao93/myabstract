import React from "react";
import { Image } from "react-bootstrap";
import image from "../Images/RajeshPic.jpg";
import "./AboutMe.css";
import { MDBIcon } from "mdbreact";

const AboutMe = () => {
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
        <h1>About me</h1>
        <div className="about-section image">
          <Image style={{ width: "10%" }} src={image} roundedCircle />
        </div>
        <div className="about-section title">
          <h5>
            <strong>Rajesha Koppa Ramesha</strong>
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
          Find my profile on: <br />
          <span>
            <MDBIcon fab icon="linkedin" />
            <a
              className="profiles"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <MDBIcon fab icon="github" />
            <a
              className="profiles"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
        </div>
        <div className="about-section skills">
          <h3>Technical skills</h3>
          <div>
            {techSkills.map((skill, i) => (
              <div key={i}>
                <span>
                  <strong>{skill.division} :</strong>
                  &nbsp;{skill.skills}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-section projects">
          <h3>Projects</h3>
          <div className="project-details">
            {projects.map((project, i) => (
              <div key={i} className="project">
                <div className="project-name">
                  <MDBIcon fas icon="project-diagram" />
                  &nbsp;{project.name}
                </div>
                <div className="project-description">
                  <span> {project.desc}</span>
                  <br />
                  <p>
                    <MDBIcon fas icon="external-link-alt" />
                    &nbsp;
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.hostedLink}
                    </a>
                    {project.hostedLink != "" && <span>&nbsp;|&nbsp; </span>}
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.gitLink}
                    </a>
                  </p>
                  <p>
                    <MDBIcon fas icon="laptop-code" />
                    &nbsp;
                    {project.language}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

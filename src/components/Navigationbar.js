import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import "./Navigationbar.css";

const Navigationbar = () => {
  const navbarStyle = {
    backgroundColor: "transparent",
  };

  return (
    <Navbar
      className="navbar-transparent navbar navbar-expand-lg"
      style={navbarStyle}
      fixed="top"
    >
      <Navbar.Brand href="/home">
        <h2 className="logo">
          <MDBIcon fab icon="phoenix-framework" /> myabstract
        </h2>
      </Navbar.Brand>

      <div className="download-button">
        <a href="/aboutme" style={{ color: "white" }}>
          <p>About me</p>
        </a>
      </div>
    </Navbar>
  );
};

export default Navigationbar;

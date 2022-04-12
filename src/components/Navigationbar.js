import React, { useState, useEffect } from "react";
import { Navbar, Button } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import "./Navigationbar.css";
import image from "../Images/bgImg5.jpg";

const Navigationbar = () => {
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    //change nav bar color on scroll
    let listener = document.addEventListener("scroll", (e) => {
      var scrollLength = document.scrollingElement.scrollTop;
      if (scrollLength >= 150) {
        if (!scrollState) setScrollState(true);
      } else {
        if (scrollState) setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const buttonStyle = { borderRadius: "2rem", textTransform: "lowercase" };
  const navbarStyle = {
    backgroundColor: !scrollState ? "transparent" : "#005fff80",
    justifyContent: "center",
  };

  return (
    <Navbar
      className="navbar-transparent navbar navbar-expand-lg"
      style={navbarStyle}
      fixed="top"
    >
      <Navbar.Brand href="/Home/">
        <h2 className="logo">
          <MDBIcon fab icon="phoenix-framework" /> myabstract
        </h2>
      </Navbar.Brand>

      <div className="download-button">
        <a style={{ display: "none" }} href={image} download="Image.jpg">
          <Button active={false} style={buttonStyle}>
            Download cv
          </Button>
        </a>
      </div>
    </Navbar>
  );
};

export default Navigationbar;

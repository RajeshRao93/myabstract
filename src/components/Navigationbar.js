import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import "./Navigationbar.css";

const Navigationbar = () => {
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    //change nav bar color on scroll
    let listener = document.addEventListener("scroll", (e) => {
      var scrollLength = document.scrollingElement.scrollTop;
      if (scrollLength >= 10) {
        if (!scrollState) setScrollState(true);
      } else {
        if (scrollState) setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const navbarStyle = {
    backgroundColor: !scrollState ? "transparent" : "rgb(185 199 223 / 50%)",
  };

  return (
    <Navbar
      className="navbar-transparent navbar navbar-expand-lg"
      style={navbarStyle}
      fixed="top"
    >
      <Navbar.Brand href="/home">
        <h2 className="logo">myabstract</h2>
      </Navbar.Brand>

      <div className="download-button"></div>
    </Navbar>
  );
};

export default Navigationbar;

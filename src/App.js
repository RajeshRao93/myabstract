import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import "react-bootstrap/dist/react-bootstrap.min.js";
import Router from "./router.js";

const App = () => {
  return (
    <div>
      <div>
        <Navigationbar />
        <Router />
      </div>
    </div>
  );
};

export default App;

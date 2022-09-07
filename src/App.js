import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import StartBoxWrapper from "./components/StartBox/StartBoxWrapper";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <StartBoxWrapper></StartBoxWrapper>
      </div>
    </Router>
  );
}

export default App;

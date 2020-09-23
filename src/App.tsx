import React from "react";
// import styled from "styled-components";
import "./App.css";
import NavBar from "./pages/NavBar"
import Homepage from "./pages/Homepage"
import Game from "./pages/Game"
import { BrowserRouter as Router, Route } from "react-router-dom"



function App() {

  return (
    <Router>
    <div className="App">
    <NavBar />
      <header className="App-header">
        <Route exact path="/home" render={() =><Homepage />} />
        <Route exact path="/game" render={() =><Game />} />
        <p>
        </p>
      </header>
    </div>
    </Router>
  );
}

export default App;

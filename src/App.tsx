import React, { useState } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";

interface MyState {
  name: string;
  version: number;
}

export const NiceHeadline = styled.h1`
  padding: 10px;
  background-color: #fff;
  color: #111;
  border-radius: 10px;
`;

function App() {
  const [exampleState, updateExampleState] = useState<MyState>({
    name: "code names app",
    version: 3,
  });

  return (
    <div className="App">
      <header className="App-header">
        <NiceHeadline>
          name: {exampleState.name} - version: {exampleState.version}
        </NiceHeadline>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

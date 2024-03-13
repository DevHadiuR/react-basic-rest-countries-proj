import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div style={{ border: "2px solid pink" }}>
        <Countries></Countries>
      </div>
    </>
  );
}

export default App;

import React from "react";

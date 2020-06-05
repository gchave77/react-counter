import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gabe's Counter App</h2>
      </header>
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}

export default App;

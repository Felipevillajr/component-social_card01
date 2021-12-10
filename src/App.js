import React from "react";
import "./App.css";
import Socialcard from "./Components/socialcard/socialcard.js";

export default function App() {
  return (
    <div className="app">
      <div className="app__title">
        <h1>the component below was created for learning purposes from</h1>

        <a
          className="app__title__link"
          href="https://daveceddia.com/react-practice-projects/"
        >
          here
        </a>
      </div>

      <Socialcard />

      <h3>not designed for responsiveness</h3>
    </div>
  );
}

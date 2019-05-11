import React from "react";
import "./App.css";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={require("./assets/Drunkord.png")} alt="Drunkcord" />
        <h1 style={{ display: "inline", verticalAlign: "super" }}>Drunkcord</h1>
        <h3 style={{ display: "inline" }}>
          A Bot to keep track of who is drinking in the Server!
        </h3>
      </header>
      <Instructions />
      <div className="main">
        <img
          className="screenshot"
          src={require("./assets/beer_screenshot.png")}
          alt="Show output of consumed beers"
        />
      </div>
      <div className="footer">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        ️ by
        <a
          href="https://github.com/jonnynabors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jonny Nabors
        </a>
      </div>
    </div>
  );
}

export default App;

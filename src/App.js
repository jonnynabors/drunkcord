import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 style={{ display: "inline" }}>Drunkcord</h1>
          <h3 style={{ display: "inline" }}>
            A Discord Bot to keep track of who is drinking in the Discord
            Server!
          </h3>
        </div>
      </header>
      <div className="main">
        The best bot for getting drunk with your friends
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

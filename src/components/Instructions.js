import React from "react";

const Instructions = () => {
  return (
    <div className="instructions">
      <h1>How to use!</h1>
      <h3>
        {`!cheers {drink name}
Adds the drink you are currently drinking`}
      </h3>
      <h3>!drinks How many total drinks have been had</h3>
      <h3>!drunk Lists how many drinks each participant has had</h3>

      <h3>!closingtime Clears the drink list</h3>

      <h3>!db-help Lists all commands that Drunkcord knows</h3>
      <h3>
        {`!beers {beer name}
Outputs data from Untappd about the beer you're drinking!`}
      </h3>
    </div>
  );
};

export default Instructions;

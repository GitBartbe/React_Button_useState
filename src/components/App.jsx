import React, { useState } from "react";

function App() {
  const [headingText, setHeadnigText] = useState("Text");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleOnMouseOver() {
    setMouseOver(true);
  }

  function handleOnMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

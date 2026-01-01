import React from "react";

function Moves({ name, score, handleClick }) {
  return (
    <div className="step">
      <h2 id={name}>{name}</h2>
      <p>{score}</p>
      <button
        onClick={handleClick}
        className={name + " btn"}
      >
        +1
      </button>
    </div>
  );
}

export default Moves;

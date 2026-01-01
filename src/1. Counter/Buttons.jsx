import React from "react";

function Buttons({ increase, decrease, reset }) {
  return (
    <div className="btn-cont">
      <button onClick={increase} className="increase btns">
        Increase
      </button>
      <button onClick={decrease} className="decrease btns">
        Decrease
      </button>
      <button onClick={reset} className="reset btns">
        Reset
      </button>
    </div>
  );
}

export default Buttons;

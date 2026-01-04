import React, { useRef } from "react";

function RefPropForm({firstRef, secondRef}) {
  return (
    <form className="parts form" action="">
      <input id="firstInput" ref={firstRef} type="text" className="input" placeholder="First Input" />
      <input id="secondInput" ref={secondRef} type="text" className="input" placeholder="Second Input" />
    </form>
  );
}

export default RefPropForm;

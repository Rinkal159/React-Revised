import React from "react";

function Box({ content, handleClick, id, isActive }) {
  return (
    <div
      style={{ backgroundColor: isActive ? content : "white" }}
      id={id}
      onClick={(e) => handleClick(e, content)}
      className="box"
    >
      {content}
    </div>
  );
}

export default Box;

import React from "react";

function BasicPropsButton({
  content,
  bgColor,
  padding,
  handleCount,
  borderColor,


}) {

  const disable = content==="Disable Button";
  return (
    <button
      onClick={() => handleCount(content)}
      disabled={disable}
      className="btn"
      style={{
        backgroundColor: bgColor,
        padding: padding,
        borderColor: borderColor,
        cursor: content==="Disabled Button"?"not-allowed":"pointer"
      }}
    >
      {content}
    </button>
  );
}

export default BasicPropsButton;

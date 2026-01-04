import React from "react";

function RefPropButtons({content, bgColor, handleFormClick, childrenBtn}) {
  return <button onClick={handleFormClick} className={"btn " + childrenBtn}style={{backgroundColor:bgColor}}>{content}</button>;
}

export default RefPropButtons;

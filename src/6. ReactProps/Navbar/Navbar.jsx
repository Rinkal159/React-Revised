import React from "react";

function Navbar({id, content}) {
  return <a className="btn navBtns" href={id}>{content}</a>;
}

export default Navbar;

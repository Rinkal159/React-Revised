import React from "react";
import BasicProps from "./BasicProps/BasicProps";
import "./App.css";
import RefProp from "./RefProps/RefProp";
import ChildrenProp from "./Childrenprops/ChildrenProp";
import ComplexProp from "./ComplexProps/ComplexProp";
import Navbar from "./Navbar/Navbar";

function App() {
  const navbarInfo = [
    { id: "#basic", content: "Basic Props" },
    { id: "#ref", content: "Ref Props" },
    { id: "#children", content: "Children Props" },
    { id: "#complex", content: "Complex Props" },
  ];

  return (
    <div className="parent">
      <h1 className="main-heading">React Props Explained</h1>
      <div className="navbar">
        {navbarInfo.map((item, i) => (
          <div key={i}>
            <Navbar id={item.id} content={item.content} />
          </div>
        ))}
      </div>
      <BasicProps />
      <RefProp />
      <ChildrenProp />
      <ComplexProp />
    </div>
  );
}

export default App;

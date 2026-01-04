import React, { useRef } from "react";
import RefPropForm from "./RefPropForm";
import RefPropButtons from "./RefPropButtons";
import HeadingSubheadings from "../HeadingSubheadings.jsx";

function RefProp() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const buttonInfo = [
    {
      content: "Focus First Input",
      bgColor: "#4491efff",
      handleClick: () => {
        firstRef.current.focus();
      },
    },
    {
      content: "Focus Second Snput",
      bgColor: "#ba1ed9ff",
      handleClick: () => {
        secondRef.current.focus();
      },
    },
    {
      content: "Grt First Input Value",
      bgColor: "#09bc00ff",
      handleClick: () => {
        alert(
          ` ${
            !firstRef.current.value
              ? "Please write something."
              : "First Input Value : " + firstRef.current.value
          }`
        );
      },
    },
    {
      content: "Clear First Input",
      bgColor: "#c61e04ff",
      handleClick: () => {
        firstRef.current.value = "";
      },
    },
  ];

  return (
    <div id="ref" className="basic-props">
      <HeadingSubheadings
        headingSize={"2.1rem"}
        subheadingSize={"1.1rem"}
        heading={"Ref Props"}
        subheading={
          "Refs provide a way to access DOM nodes or React elements directly. Use forwardRef to pass refs to child componenets."
        }
      />
      <RefPropForm firstRef={firstRef} secondRef={secondRef} />

      <div className="btn-part">
        {buttonInfo.map((btn, i) => (
          <div className="button-list" key={i}>
            <RefPropButtons
              content={btn.content}
              bgColor={btn.bgColor}
              handleFormClick={btn.handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RefProp;

import React, { useState } from "react";
import BasicPropsButton from "./BasicPropsButton.jsx";
import BasciPropsSubPartsHeading from "./BasciPropsSubPartsHeading.jsx";
import HeadingSubheadings from "../HeadingSubheadings.jsx";


function BasicProps() {
  const [count, setCount] = useState(0);

  const colors = [
    { content: "Primary Button", bgColor: "#3f37c9" },
    { content: "Secondary Button", bgColor: "gold" },
    { content: "Danger Button", bgColor: "red" },
    { content: "Success Button", bgColor: "green" },
  ];
  const sizes = [
    { content: "Small", bgColor: "#3f37c9", padding: "10px 20px" },
    { content: "Medium", bgColor: "#3f37c9", padding: "10px 60px" },
    { content: "Large", bgColor: "#3f37c9", padding: "20px 40px" },
  ];
  const states = [
    { content: "Enabled Button", bgColor: "#3f37c9" },
    { content: "Disabled Button", bgColor: "#9cb6ffff" },
  ];

  const handleCount = (content) => {
    if (content !== "Disabled Button") {
      setCount(() => count + 1);
    }
  };

  const mapValues = (arr) =>
    arr.map((item, i) => (
      <div className="buttons-list" key={i}>
        <BasicPropsButton
          handleCount={handleCount}
          content={item.content}
          bgColor={item.bgColor}
          padding={item?.padding}
          borderColor={item.bgColor}
        />
      </div>
    ));

  return (
    <div id="basic" className="basic-props">

      <HeadingSubheadings headingSize={"2.1rem"} subheadingSize={"1.1rem"} heading={"Basic Props"} subheading={"Props are arguments passed to react components. They allowyou to pass data from parent to child components."}/>

      <div className="parts">
        <BasciPropsSubPartsHeading partHeading={"Different Colors"} />
        <div className="btn-part">{mapValues(colors)}</div>
      </div>

      <div className="parts">
        <BasciPropsSubPartsHeading partHeading={"Different Sizes"} />
        <div className="btn-part">{mapValues(sizes)}</div>
      </div>

      <div className="parts">
        <BasciPropsSubPartsHeading partHeading={"Different States"} />
        <div className="btn-part">{mapValues(states)}</div>
      </div>

      <div className="count">Count: {count}</div>
    </div>
  );
}

export default BasicProps;

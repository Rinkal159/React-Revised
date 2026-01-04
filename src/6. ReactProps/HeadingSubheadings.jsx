import React from "react";

function HeadingSubheadings({
  heading,
  subheading,
  headingSize,
  subheadingSize,
  headingFontWeight,
  backgroundColor,
  borderColor,
  childrenCard,
  
}) {

  return (
    <div
      className={"intro " + childrenCard}
      style={{
        backgroundColor: backgroundColor,
        borderColor:borderColor
      }}
    >
      <h1
        style={{ fontSize: headingSize, fontWeight: headingFontWeight }}
        className="heading"
      >
        {heading}
      </h1>
      <p style={{ fontSize: subheadingSize }} className="desc">
        {subheading}
      </p>
    </div>
  );
}

export default HeadingSubheadings;

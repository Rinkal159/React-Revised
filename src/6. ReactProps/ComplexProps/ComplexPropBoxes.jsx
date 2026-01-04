import React from "react";
import RefPropButtons from "../RefProps/RefPropButtons.jsx";

function ComplexPropBoxes({
  icon,
  name,
  email,
  firstButton,
  secondButton,
  firstNum,
  secondNum,
  thirdNum,
  firstDesc,
  secondDesc,
  thirdDesc,
  btnContent,
  bgColor,
  handleClick,
}) {
  const isAlice = name === "Alice Johnson";
  return (
    <div
      style={{ backgroundColor: isAlice ? "#edf7ffff" : "#edfff1ff" }}
      className={"inner-complex"}
    >
      <div className="first">
        <span
          style={{ backgroundColor: isAlice ? "#bde1ffff" : "#b7ffc6ff" }}
          className="icon"
        >
          {icon}
        </span>
        <div className="second-halfof-first">
          <h2 className="name">{name}</h2>
          <div className="email">{email}</div>
          <div className="buttons-of-first-half">
            <button
              style={{ backgroundColor: isAlice ? "#98d1ffff" : "#80ff9bff" }}
              className="first-btns"
            >
              {firstButton}
            </button>
            <button
              style={{ backgroundColor: isAlice ? "#98d1ffff" : "#80ff9bff" }}
              className="first-btns"
            >
              {secondButton}
            </button>
          </div>
        </div>
      </div>

      <hr className="hr" />

      <div className="second">
        <div className="second-parts">
          <h2 className="num">{firstNum}</h2>
          <p className="second-desc">{firstDesc}</p>
        </div>
        <div className="second-parts">
          <h2 className="num">{secondNum}</h2>
          <p className="second-desc">{secondDesc}</p>
        </div>
        <div className="second-parts">
          <h2 className="num">{thirdNum}</h2>
          <p className="second-desc">{thirdDesc}</p>
        </div>
      </div>

      <div className="third ">
        <RefPropButtons
          handleFormClick={() => handleClick(name)}
          content={"View Profile"}
          bgColor={bgColor}
        />
        <RefPropButtons content={btnContent} bgColor={"#b1b0b0ff"} />
      </div>
    </div>
  );
}

export default ComplexPropBoxes;

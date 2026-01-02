import React, { useState } from "react";
import "./App.css";
import matchNumber from "./genRandomNumber";
import Information from "./Information";

function App() {
  const matchingNumber = 1;

  const [nums, setNums] = useState([]);
  const [attemp, setAttempt] = useState(0);

  const handleClick = (e) => {
    const info = e.target.parentNode.children[3];
    info.classList.add("display");

    const obj = matchNumber(matchingNumber);
    if (nums[nums.length - 1]?.matched) {
      setAttempt(1);
      setNums([]);
      setNums((prev) => [...prev, obj]);
      return;
    }

    setAttempt(attemp + 1);
    setNums([...nums, obj]);
  };

  return (
    <div className="container">
      <h1 className="heading">Lottery game</h1>
      <p className="instruction">
        Sum of digits of random numbers should be equal to {matchingNumber} to
        Win.
      </p>
      <button onClick={handleClick} className="btn">
        {nums[nums.length - 1]?.matched
          ? "Start Again!"
          : "Generate Random Number"}
      </button>
      <Information
        num={nums[nums.length - 1]?.num}
        sum={nums[nums.length - 1]?.sum}
        matched={nums[nums.length - 1]?.matched}
        attemp={attemp}
      />
    </div>
  );
}

export default App;

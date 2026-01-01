import React, { useState } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCount(0);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    parseInt(input) >= 0 ? setCount(parseInt(input)) : alert("Invalid Count");
    setInput("");
  };

  return (
    <div className="container">
      <h1 className="heading">Counter</h1>
      <h1 className="count">{count}</h1>
      <Buttons increase={increase} decrease={decrease} reset={reset} />
      <Form
        setNewCount={handleChange}
        newCount={input}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;

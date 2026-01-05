import React, { useState } from "react";
import Box from "./Box";
import "./App.css";

function App() {
  const boxInfo = [
    { id: 1, content: "gray" },
    { id: 2, content: "red" },
    { id: 3, content: "yellow" },
    { id: 4, content: "pink" },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="boxCont">
      {boxInfo.map((box) => (
        <div key={box.id}>
          <Box
            content={box.content}
            id={box.id}
            handleClick={() => setActive(box.id)}
            isActive={active === box.id}
          />
        </div>
      ))}
    </div>
  );
}

export default App;

import React from "react";
import Hello from "./Hello";
import HelloGuest from "./HelloGuest";

function App() {
  return (
    <div>
      <Hello>
        <HelloGuest />
      </Hello>
    </div>
  );
}

export default App;

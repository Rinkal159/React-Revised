import { useState } from "react";
import "./App.css";
import Moves from "./Moves";

export default function App() {
  const pieces = ["red", "yellow", "blue", "green"];

  const [moves, setMoves] = new useState({
    red: 0,
    yellow: 0,
    blue: 0,
    green: 0,
  });

  const [showMoves, setShowMoves] = new useState([]);

  const handleClick = (e) => {
    const thisColor = e.target.parentNode.children[0].id;
    setMoves({
      ...moves,
      [thisColor]: moves[thisColor] + 1,
    });

    setShowMoves([...showMoves, [thisColor]]);
  };

  return (
    <div>
      <h1 className="heading">Ludo Game</h1>
      <div className="steps">
        {pieces.map((piece, i) => (
          <Moves
            key={i}
            name={piece}
            score={moves[piece]}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="moves">
        <div className="inner">
          <h1 className="subHeading">Moves:</h1>
          <p className="allMoves">{showMoves.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

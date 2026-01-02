import React from "react";

function Information({ num, sum, matched, attemp }) {
  return (
    <div className="info">
      <h2 className="num common">Random Number: {num}</h2>
      <h2 className="sum common">Sum of Random Number : {sum}</h2>
      <h2 className="result common" style={{color:matched?"green" : "red"}}>
        {matched
          ? "Congratulations! You have won the lottery!!"
          : "Better luck next time!"}
      </h2>
      {matched && (
        <h2 className="attemps">You have won in {attemp} attempts!!</h2>
      )}
    </div>
  );
}

export default Information;

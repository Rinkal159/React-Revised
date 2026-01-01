import React from "react";

function Form({ setNewCount, newCount, handleClick }) {
  return (
    <div>
      <form className="form" action="">
        <input
        className="input"
          onChange={setNewCount}
          type="number"
          name="count"
          id="newCount"
          placeholder="Set new count"
          value={newCount}
        />
        <button className=" setBtn" onClick={handleClick}>set to {newCount.length>0 ? newCount : "<count>"}</button>
      </form>
    </div>
  );
}

export default Form;

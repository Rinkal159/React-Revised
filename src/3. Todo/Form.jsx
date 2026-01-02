import React from "react";

function Form({handleChange,handleSubmit, value}) {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit} action="">
        <input onChange={handleChange} value={value} className="input" id="input" type="text" placeholder="Type your ToDo" required autoComplete="off"/>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default Form;

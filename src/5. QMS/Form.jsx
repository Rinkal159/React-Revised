import React from "react";

function Form({ handleClick, handleChange, name, handleService, service }) {
  return (
    <div className="cont">
      <h1 className="form-heading">Add to Queue</h1>
      <form className="form" onSubmit={handleClick} action="">
        <input
          onChange={handleChange}
          value={name}
          className="input"
          type="text"
          placeholder="Customer Name"
          required
        />

        <select
          name="service"
          id="service"
          value={service}
          onChange={handleService}
          required
          className="input select"
        >
          <option value="" disabled>
            Select Service
          </option>
          <option value="consultation">Consultation</option>
          <option value="payment">Payment</option>
          <option value="support">Support</option>
        </select>

        <button className="btn">
          <i className="fa-solid fa-user-plus"></i> Add Customer
        </button>
      </form>
    </div>
  );
}

export default Form;

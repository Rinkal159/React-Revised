import React from "react";

function Display({ id, name, service, status, leftBtn, statusUpdate, remove }) {
  return (
    <div id={id} className="current-queue">
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="service">Service: {service}</p>
        <p
          style={{
            color: status === "Completed" ? "green" : "black",
            fontWeight: status === "Completed" ? "500" : "400",
          }}
          className="status"
        >
          {status}
        </p>
      </div>
      <div className="buttons">
        {status !== "Completed" && (
          <button
            onClick={() => statusUpdate(id, leftBtn)}
            style={{
              backgroundColor:
                leftBtn === "Completed"
                  ? "rgba(0, 155, 0, 1)"
                  : "rgba(255, 255, 255, 1)",
              color: leftBtn === "Completed" ? "white" : "black",
            }}
            className="left btn"
          >
            {leftBtn}
          </button>
        )}
        <button onClick={() => remove(id)} className="right btn">
          <i className="fa-solid fa-person-circle-minus"></i>
        </button>
      </div>
    </div>
  );
}

export default Display;

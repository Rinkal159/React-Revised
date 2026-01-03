import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";
import "./App.css";
import getInput from "./getInput";

function App() {
  const [queue, setQueue] = useState([]);
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Enter valid name");
      setName("");
      setService("");
      return;
    }
    setQueue([
      ...queue,
      { id: Date.now(), name: name, service: service, status: "Waiting..." },
    ]);
    setName("");
    setService("");
  };

  const statusUpdate = (id, btn) => {
    setQueue((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: btn === "Serve" ? "Serving" : "Completed",
            }
          : item
      )
    );
  };

  const remove = (id) => {
    setQueue((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="parent">
      <h1 className="heading">Queue Management System</h1>
      <p className="desc">Manage your customers effeciently.</p>

      <Form
        handleClick={handleClick}
        handleChange={(e) => getInput(setName, e)}
        name={name}
        handleService={(e) => getInput(setService, e)}
        service={service}
      />

      <h1 className="queue-heading heading">Current Queue</h1>

      <div className="cont">
        {queue.length > 0 ? (
          queue.map((val) => (
            <div key={val.id}>
              <Display
                id={val.id}
                name={val.name}
                service={val.service}
                status={val.status}
                leftBtn={val.status === "Waiting..." ? "Serve" : "Completed"}
                statusUpdate={statusUpdate}
                remove={remove}
              />
            </div>
          ))
        ) : (
          <div>
            <p className="desc">No customers in Queue.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

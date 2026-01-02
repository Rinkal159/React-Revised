import React from "react";

function List({ list, handleDelete, handleMarkDone }) {
  return (
    <ol className="list">
      {list.map((li, i) => (
        <li
          style={{
            textDecoration: li.isMarkDone ? "line-through" : "none",
            textTransform: li.isUpperCase ? "uppercase" : "Capitalize",
          }}
          id={li.id}
          className="li"
          key={i}
        >
          {li.name}&nbsp;
          <i onClick={handleDelete} className="fa-regular fa-trash-can"></i>
          &nbsp;<i onClick={handleMarkDone} className="fa-solid fa-check"></i>
        </li>
      ))}
    </ol>
  );
}

export default List;

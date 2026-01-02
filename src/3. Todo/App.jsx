import React, { useState } from "react";
import Form from "./Form";
import AdditionalButtons from "./AdditionalButtons";
import "./App.css";
import List from "./List";

let idStart = 0;

function App() {
  const [list, setList] = new useState([]);
  const [input, setInput] = new useState("");

  // add a todo
  const handleSubmit = (e) => {
    e.preventDefault();

    setList([
      ...list,
      { id: idStart++, name: input, isUpperCase: false, isMarkDone: false },
    ]);
    setInput("");
  };

  // get input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // delete one todo
  const handleDelete = (e) => {
    const deleteItemId = e.target.parentNode.id;

    setList(list.filter((li) => li.id != deleteItemId));
  };

  // mark as done one todo
  const handleMarkDone = (e) => {
    const markDoneId = e.target.parentNode.id;

    setList(
      list.map((li) =>
        li.id == markDoneId ? { ...li, isMarkDone: true } : li
      )
    );
  };

  // remove all todos
  const removeAll = () => {
    setList([]);
  };

  // upper case all todos
  const upperCaseAll = (e) => {
    const content = e.target.textContent;

    setList(
      list.map((li) =>
        content === "Upper case All"
          ? { ...li, isUpperCase: true }
          : { ...li, isUpperCase: false }
      )
    );
  };

  // mark as done all todos
  const markAsDoneAll = () => {
    setList(
      list.map((li) => ({
        ...li,
        isMarkDone: true,
      }))
    );
  };

  return (
    <div>
      <h1 className="heading">To Do List</h1>
      <div className="container">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={input}
        />
        <AdditionalButtons
          removeAll={removeAll}
          upperCaseAll={upperCaseAll}
          upperCase={list[0]?.isUpperCase}
          markAsDoneAll={markAsDoneAll}
        />
      </div>
      <List
        list={list}
        handleDelete={handleDelete}
        handleMarkDone={handleMarkDone}
      />
    </div>
  );
}

export default App;

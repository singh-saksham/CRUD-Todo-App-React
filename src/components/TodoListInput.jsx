import React, { useState } from "react";

export default function TodoListInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Write your todo"
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          {
            setTodoValue("");
          }
        }}
      >
        Create
      </button>
    </header>
  );
}

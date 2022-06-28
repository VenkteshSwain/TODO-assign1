import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";

const Todo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task === "") return;

    if (!task.match(/^[0-9a-zA-z][0-9a-zA-z ]*[0-9a-zA-z]$/)) return;

    dispatch(addTodo(task));

    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Please Name Backlog..."
        value={task}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Backlog</button>
    </div>
  );
};

export default Todo;

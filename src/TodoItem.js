import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem({ task, deleteTask }) {
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  function EditChange({ item, change, delTodo }) {
    const [editing, setEditing] = useState(false);

    function handleEditing() {
      setEditing(true);
    }
  }

  return (
    <div className="TODO-ITEM">
      <div className="left">
        <input type="checkbox" onChange={handleChange} />
        <p>{task.text}</p>
      </div>
      <div className="right"></div>
      <b>{checked ? "Completed" : ""}</b>
      {/* <button onClick>Edit</button> */}
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;

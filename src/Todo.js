import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";
const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn ReactJS",
      completed: true,
    },
  ]);

  const [text, setText] = useState(" ");

  const newTask = {
    id: Date.now(),
    text,
    completed: false,
  };
  function addTask(text) {
    if (text === " ") {
      alert("Please enter your data");
    } else {
      setTasks([...tasks, newTask]);
      setText(" ");
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const [edit, setEdit] = useState("");
  function EditTask() {}

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      console.log("Enter key was pressed");
      if (text === " ") {
        alert("Please enter your data");
      } else {
        setTasks([...tasks, newTask]);
        setText(" ");
      }
    }
  }
  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="TODO-LIST">
        <div className="upper">
          <input
            value={text}
            type="text"
            required
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => addTask(text)}>Add</button>
        </div>

        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            // check={check}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;

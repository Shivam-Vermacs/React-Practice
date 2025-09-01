import { useState } from "react";

export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function ChangeHandler(e) {
    setNewTask(e.target.value);
  }
  function AddTodo() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  }
  function DeleteTodo(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  return (
    <div>
      <input type="text" value={newTask} onChange={ChangeHandler} />
      <button onClick={AddTodo}>Add Task</button>
      <ul>
        {tasks.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={() => DeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

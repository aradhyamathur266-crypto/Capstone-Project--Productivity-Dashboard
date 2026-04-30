import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "20px", padding: "20px" }}>
        <h2>Task Manager</h2>

        
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={{ marginLeft: "10px" }} onClick={addTask}>Add</button>

        
        
        {tasks.length === 0 ? (
          <p>No tasks yet, Add one</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task.text}</span>
       
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Tasks;
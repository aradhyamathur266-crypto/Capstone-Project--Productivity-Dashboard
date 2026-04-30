import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  
  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  
  const addTask = () => {
    if (!task.trim()) return;
    const newTasks = [...tasks, { text: task, completed: false }];
    saveTasks(newTasks);
    setTask("");
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    saveTasks(newTasks);
  };

  
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    saveTasks(newTasks);
  };

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <h2>Tasks</h2>
        <div style={{ marginTop: "15px" }}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        
        {tasks.length === 0 ? (
          <p style={{ marginTop: "20px" }}>No tasks yet</p>
        ) : (
          <ul style={{ marginTop: "20px", padding: 0 }}>
            {tasks.map((t, i) => (
              <li key={i} className="task-item">
                <span
                  onClick={() => toggleComplete(i)}
                  className="task-text"
                  style={{
                    textDecoration: t.completed ? "line-through" : "none",
                  }}
                >
                  {t.text}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(i)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Tasks;
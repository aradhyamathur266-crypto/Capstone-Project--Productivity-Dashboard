import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) {
      setTasks(saved);
    }
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <h2>Dashboard</h2>
        <p>Welcome! Here's your productivity overview.</p>

        <div className="cards">
          <div className="card">
            <h3>Total Tasks</h3>
            <p>{total}</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p style={{ color: "green" }}>{completed}</p>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <p style={{ color: "red" }}>{pending}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
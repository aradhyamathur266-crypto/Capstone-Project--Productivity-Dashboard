import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "20px", padding: "20px" }}>
        <h2>Dashboard</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={cardStyle}>
            <h3>Total Tasks</h3>
            <p>{total}</p>
          </div>

          <div style={cardStyle}>
            <h3>Completed</h3>
            <p>{completed}</p>
          </div>

          <div style={cardStyle}>
            <h3>Pending</h3>
            <p>{pending}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  background: "#e2e8f0",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center",
};

export default Dashboard;
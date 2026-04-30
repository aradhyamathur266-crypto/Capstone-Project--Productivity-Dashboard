import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Analytics() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "20px", padding: "20px" }}>
        <h2>Analytics</h2>

        <p>Total Tasks: {total}</p>
        <p>Completed Tasks: {completed}</p>
        <p>Completion Rate: {percentage}%</p>
      </div>
    </div>
  );
}

export default Analytics;
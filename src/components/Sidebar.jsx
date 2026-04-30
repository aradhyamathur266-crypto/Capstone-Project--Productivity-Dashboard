import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>
      <h2>My App</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link></li>
        <li><Link to="/tasks" style={{ color: "white" }}>Tasks</Link></li>
        <li><Link to="/analytics" style={{ color: "white" }}>Analytics</Link></li>
        <li><Link to="/timer" style={{ color: "white" }}>Timer</Link></li>
        <li><Link to="/news" style={{ color: "white" }}>News</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
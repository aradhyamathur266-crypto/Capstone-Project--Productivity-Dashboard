import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Productivity App</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/timer">Timer</Link>
      <Link to="/news">News</Link>
    </div>
  );
}

export default Sidebar;
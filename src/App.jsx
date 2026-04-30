import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Timer from "./pages/Timer";
import Login from "./pages/Login";
import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Timer() {
  const [time, setTime] = useState(1500); // 25 min
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ marginLeft: "20px", padding: "20px" }}>
        <h2>Focus Timer</h2>

        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>

        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Pause</button>
        <button onClick={() => setTime(1500)}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
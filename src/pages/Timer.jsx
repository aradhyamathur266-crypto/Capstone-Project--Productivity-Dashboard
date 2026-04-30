import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Timer() {
  const [time, setTime] = useState(1500); 
  const [input, setInput] = useState(25); 
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const setCustomTime = () => {
    setTime(input * 60);
    setRunning(false);
  };

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content timer-container">
        <h2>Focus Timer</h2>

        <div className="timer-box">
          <h1>{formatTime()}</h1>

          {/* 👇 Custom input */}
          <div className="timer-input">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Minutes"
            />
            <button onClick={setCustomTime}>Set</button>
          </div>

          <div className="timer-buttons">
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Pause</button>
            <button
              onClick={() => {
                setTime(1500);
                setRunning(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
import React, { useState, useEffect } from 'react';
import './Stopwatch.css'; // Import the custom CSS file for styling

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const pad = (num) => (num < 10 ? '0' + num : num);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-heading"></h1>
      <div className="stopwatch-time">{formatTime(time)}</div>
      <div className="button-container">
        <button className="start-button" onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Play'}
        </button>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

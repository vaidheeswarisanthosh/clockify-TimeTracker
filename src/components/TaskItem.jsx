import React, { useState, useEffect } from 'react';

const TaskItem=({ task, updateTask, deleteTask })=> {
  const [time, setTime] = useState(task.time);
  const [isRunning, setIsRunning] = useState(task.isRunning);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    updateTask(task.id, time, !isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    updateTask(task.id, 0, false);
  };

  const handleDelete = () => {
    deleteTask(task.id); 
  };

  return (
    <div className="task-item">
     
      <p>{task.name}</p>
      <div className="task-controls">
        <span>{new Date(time * 1000).toISOString().substr(11, 8)}</span>
        <button onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;

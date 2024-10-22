import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App=()=> {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([
      ...tasks,   
      {
        id: Date.now(),  
        name: taskName,
        time: 0,
        isRunning: false,
      },
    ]);
  };

  const updateTask = (taskId, time, isRunning) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, time, isRunning } : task   
                                                                  
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Removes the task with the given id
  };

  return (
    <div className="App">
      <h1>Time Tracker</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

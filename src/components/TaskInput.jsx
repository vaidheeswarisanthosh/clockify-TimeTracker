import React, { useState } from 'react';

 const TaskInput=({ addTask })=> {
  const [taskName, setTaskName] = useState(''); 

  const handleSubmit = (e) => {     
    e.preventDefault();      
    if (taskName.trim()) {    
      addTask(taskName);
      setTaskName('');  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="What are you working on?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}   
      />
      <button type="submit">Start</button>
    </form>
  );
}

export default TaskInput;

import React from 'react';
import TaskItem from './TaskItem';

const TaskList=({ tasks, updateTask, deleteTask })=> {
  return (
    <div className="task-list">
      <h3 className='task-Details'>Active Tasks </h3>
      {tasks.map((task) => (     
        <TaskItem key={task.id} task={task} updateTask={updateTask}  deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;

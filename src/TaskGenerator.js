import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = () => {
    tasks[currentTaskIndex].isCompleted = !tasks[currentTaskIndex].isCompleted;
    setCurrentTaskIndex(currentTaskIndex); // Force re-render
  };

  const task = tasks[currentTaskIndex];

  return (
    <div>
      <FancyText text={task.name} title={false} />
      <p>Status: {task.isCompleted ? 'Completed ✔' : 'Pending'}</p>
      <button onClick={toggleTaskCompletion}>
        {task.isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText text="Keep pushing forward!" title={false} />
    </div>
  );
};

export default TaskGenerator;
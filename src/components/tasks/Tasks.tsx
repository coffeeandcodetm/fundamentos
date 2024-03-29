import React, { useState } from 'react';
import { Form, TasksList } from '../index';
import style from './task.module.scss';

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}


export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className={style.container}>
      <Form updateTasks={setTasks} />
      <TasksList tasks={tasks} updateTasks={setTasks}/>
    </div>
  );
};

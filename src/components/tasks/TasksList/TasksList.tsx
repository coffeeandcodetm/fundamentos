import React, { SetStateAction } from 'react';
import style from './tasks-list.module.scss';
import { Task } from '../../../App';
import { TaskComponent } from './task/Task';

interface TasksListProps {
  tasks: Task[],
  updateTasks: (task: SetStateAction<Task[]>) => void
}

export const TasksList: React.FC<TasksListProps> = ({ tasks, updateTasks } ) => {
  return (
    <div className={style.container} >
      <div className={style.wrapper} >
        {tasks.map((task, index) => <TaskComponent key={index} task={task} updateTasks={updateTasks}/>)}
      </div>
    </div>
  );
};

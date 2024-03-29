import { SetStateAction } from 'react';
import { Task } from '../../../../App';
import style from './task.module.scss';

interface TaskProps {}

interface TaskProps {
  task: Task,
  updateTasks: (task: SetStateAction<Task[]>) => void;
}

export const TaskComponent: React.FC<TaskProps> = ({ task, updateTasks }) => {

  const handleDelete = (id: string) => {
    updateTasks((prevTasks) => [
      ...prevTasks.filter(task => task.id !== id)
    ]);
  }

  return (
    <div className={style.wrapper}>
      <input type="radio" id={task.id}  checked={task.completed} value="java" />
      <p></p>{ task.description }
       <button onClick={() => handleDelete(task.id)}><img src='src/assets/trash.svg' alt='delete' /></button>
    </div>
  );
};

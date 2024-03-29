import { SetStateAction, useState } from 'react';
import { Task } from '../../../App';
import style from './form.module.scss';

interface FormProps {
  updateTasks: (task: SetStateAction<Task[]>) => void;
}

export const Form: React.FC<FormProps> = ({ updateTasks }) => {
  const [taskName , setTaskName] = useState('');

  const getRandomId = Math.random().toString(36).substring(2, 9);

  const handleChangeTasks = () => {
    if (taskName.trim() !== '') {
      updateTasks((prevTasks) => [
        ...prevTasks,
        {id: getRandomId, description: taskName, completed: false }
      ]);
      setTaskName('');
    }
  }

  return (
    <div className={style.wrapper}>
      <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)}/>
      <button  onClick={() => handleChangeTasks()}>Criar <img src='src/assets/plus.svg' /></button>
  </div>
  );
};

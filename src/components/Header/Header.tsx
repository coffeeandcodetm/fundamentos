import style from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={style.wrapper}>
     <img src='src/assets/react.svg' alt='logo' />
     <img src='src/assets/todo.svg' alt='logo' />
    </div>
  );
};

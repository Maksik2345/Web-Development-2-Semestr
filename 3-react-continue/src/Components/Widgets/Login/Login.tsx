import { JSX, memo } from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';

function LoginComponent(): JSX.Element {
  /* Для создания события onChange у input используйте следующую конструкцию:
    <input onChange={e => setValue(e.target.value)} />

    setValue - функция из useState
  */
  /* Для очистки значений используйте пример из лекции на 23 слайде: 
    onClickButton функцию надо наполнить своим содержимым
  */
  return <div className={styles.login}></div>;
}

export const Login = memo(LoginComponent);

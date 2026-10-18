import { JSX, memo, useState } from 'react';
import { Card } from '@/Components/Layouts/Card';
import styles from './Styles.module.scss';

function LoginComponent(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onClickButton = () => {
    setLogin('');
    setPassword('');
  };

  return (
    <Card title="Вход в систему">
      <div className={styles.login}>
        <input
          className={styles.login__input}
          type="text"
          placeholder="Логин"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <input
          className={styles.login__input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.login__button} type="button" onClick={onClickButton}>
          Войти
        </button>
      </div>
    </Card>
  );
}

export const Login = memo(LoginComponent);

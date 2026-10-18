import { JSX, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Styles.module.scss';
import { Button } from '@/Components/UI/Button';

function HeaderComponent(): JSX.Element {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        logo
      </Link>
      <div className={styles.header__accountBlock}>
        <Button size="s" color="red" onClick={onClickLogout}>
          Выйти
        </Button>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);

import { JSX, memo } from 'react';
import styles from './Styles.module.scss';
import { Button } from '@/Components/UI/Button';

function HeaderComponent(): JSX.Element {
  return (
    <header className={styles.header}>
      <div>logo</div>
      <div className={styles.header__accountBlock}>
        <Button size="s" color="red">
          Выйти
        </Button>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);

import { JSX, memo } from 'react';
import styles from './Styles.module.scss';

function UserComponent(): JSX.Element {
  return <h2 className={styles.user}>{`User with id:`}</h2>;
}

export const User = memo(UserComponent);

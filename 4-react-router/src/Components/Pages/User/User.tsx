import { JSX, memo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Styles.module.scss';

function UserComponent(): JSX.Element {
  const { userId } = useParams();

  return <h2 className={styles.user}>{`User with id: ${userId}`}</h2>;
}

export const User = memo(UserComponent);

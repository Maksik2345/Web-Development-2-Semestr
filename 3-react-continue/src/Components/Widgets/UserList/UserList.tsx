import { JSX, memo } from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';

interface UserListProps {}

function UserListComponent(): JSX.Element {
  return <div className={styles.userList}>UserList</div>;
}

export const UserList = memo(UserListComponent);

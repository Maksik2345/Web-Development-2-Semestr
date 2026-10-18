import { JSX, memo } from 'react';
import { Card } from '@/Components/Layouts/Card';
import { User } from '@/Models/User';
import { pluralize } from '@/Utils';
import styles from './Styles.module.scss';

interface UserListProps {
  users: User[];
}

function UserListComponent({ users }: UserListProps): JSX.Element {
  return (
    <div className={styles.userList}>
      {users.map(user => (
        <Card key={user.id} title={user.name}>
          <p>{`Возраст: ${pluralize(user.age, { 1: 'год', 2: 'года', 5: 'лет' })}`}</p>
          <p>{`Город: ${user.city}`}</p>
        </Card>
      ))}
    </div>
  );
}

export const UserList = memo(UserListComponent);

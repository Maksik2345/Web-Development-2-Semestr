import { JSX, memo } from 'react';
import { Button } from '@/Components/UI/Button';
import { ROLE_NAMES } from '@/Constants/roles';
import { User } from '@/Reducers/UserReducer';
import styles from './Styles.module.scss';

interface TableProps {
  users: User[];
  onToggleRole: (id: string | null) => void;
  onRemove: (id: string | null) => void;
}

function TableComponent({ users, onToggleRole, onRemove }: TableProps): JSX.Element {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.table__cell}>Имя</th>
          <th className={styles.table__cell}>Роль</th>
          <th className={styles.table__cell}>Действия</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id ?? index}>
            <td className={styles.table__cell}>{user.username}</td>
            <td className={styles.table__cell}>{user.role ? ROLE_NAMES[user.role] : '—'}</td>
            <td className={styles.table__cell}>
              <div className={styles.table__actions}>
                <Button size="ss" color="secondary" onClick={() => onToggleRole(user.id)}>
                  Сменить роль
                </Button>
                <Button size="ss" color="red" onClick={() => onRemove(user.id)}>
                  Удалить
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const Table = memo(TableComponent);

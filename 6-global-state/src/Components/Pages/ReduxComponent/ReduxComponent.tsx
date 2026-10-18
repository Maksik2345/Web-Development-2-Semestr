import { JSX, memo } from 'react';
import { Button } from '@/Components/UI/Button';
import { Table } from '@/Components/Widgets/Table';
import { useAppDispatch, useAppSelector } from '@/Hooks/useAppDispatch';
import { addUser, removeUser, toggleRole } from '@/Reducers/UserReducer';
import styles from './Styles.module.scss';

function ReduxComponentComponent(): JSX.Element {
  const users = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    dispatch(addUser());
  };

  const onToggleRole = (id: string | null) => {
    dispatch(toggleRole(id));
  };

  const onRemove = (id: string | null) => {
    dispatch(removeUser(id));
  };

  return (
    <div className={styles.reduxComponent}>
      <h2 className={styles.reduxComponent__title}>{`Пользователей в системе: ${users.length}`}</h2>
      <div>
        <Button size="s" color="blue" onClick={onClickAdd}>
          Добавить пользователя
        </Button>
      </div>
      <Table users={users} onToggleRole={onToggleRole} onRemove={onRemove} />
    </div>
  );
}

export const ReduxComponent = memo(ReduxComponentComponent);

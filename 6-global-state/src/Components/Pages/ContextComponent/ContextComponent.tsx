import { JSX, memo, useContext } from 'react';
import { ROLE_NAMES } from '@/Constants/roles';
import { UserContext } from '@/Contexts/UserContext';
import styles from './Styles.module.scss';

function ContextComponentComponent(): JSX.Element {
  const user = useContext(UserContext);
  const roleName = user.role ? ROLE_NAMES[user.role] : 'Роль не задана';

  return (
    <div className={styles.contextComponent}>
      <h2 className={styles.contextComponent__name}>{`Имя: ${user.username ?? 'Гость'}`}</h2>
      <p className={styles.contextComponent__role}>{`Роль: ${roleName}`}</p>
    </div>
  );
}

export const ContextComponent = memo(ContextComponentComponent);

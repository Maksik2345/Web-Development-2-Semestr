import { pluralize } from '@/Utils';
import styles from './Styles.module.scss';

interface UserCardProps {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
}

export const UserCard = ({ name, age, email, isStudent }: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <h2 className={styles.userCard__name}>{name}</h2>
      <p className={styles.userCard__text}>{`Возраст: ${pluralize(age, { 1: 'год', 2: 'года', 5: 'лет' })}`}</p>
      <p className={styles.userCard__text}>{`Email: ${email}`}</p>
      <p className={styles.userCard__status}>{isStudent ? 'Студент' : 'Не студент'}</p>
    </div>
  );
};

import { pluralize } from '@/Utils';
import styles from './Styles.module.scss';

interface StudentProfileProps {
  name: string;
  surname: string;
  age: number;
  email?: string;
  status: string;
  avatar: string;
}

export const StudentProfile = ({ name, surname, age, email, status, avatar }: StudentProfileProps) => {
  return (
    <div className={styles.studentProfile}>
      <img className={styles.studentProfile__avatar} src={avatar} alt={`${name} ${surname}`} />
      <div className={styles.studentProfile__info}>
        <h2 className={styles.studentProfile__name}>{`${name} ${surname}`}</h2>
        <p className={styles.studentProfile__text}>{pluralize(age, { 1: 'год', 2: 'года', 5: 'лет' })}</p>
        {email && <p className={styles.studentProfile__text}>{email}</p>}
        <p className={styles.studentProfile__status}>{status}</p>
      </div>
    </div>
  );
};

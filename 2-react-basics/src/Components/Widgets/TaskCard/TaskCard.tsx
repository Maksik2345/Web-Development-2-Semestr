import styles from './Styles.module.scss';

interface TaskCardProps {
  title: string;
  subtitle: string;
  comment?: string;
}

export const TaskCard = ({ title, subtitle, comment }: TaskCardProps) => {
  return (
    <div className={styles.taskCard}>
      <h3 className={styles.taskCard__title}>{title}</h3>
      <p className={styles.taskCard__subtitle}>{subtitle}</p>
      {comment && <p className={styles.taskCard__comment}>{`Комментарий: ${comment}`}</p>}
    </div>
  );
};

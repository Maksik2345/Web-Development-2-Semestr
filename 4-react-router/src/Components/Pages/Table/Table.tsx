import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Styles.module.scss';

const STUDENTS = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    group: 'ИВТ-21',
    direction: 'Информационные технологии',
  },
  {
    id: 2,
    name: 'Петров Петр Петрович',
    group: 'ИВТ-21',
    direction: 'Информационные технологии',
  },
  {
    id: 3,
    name: 'Сидоров Сидор Сидорович',
    group: 'ИВТ-21',
    direction: 'Информационные технологии',
  },
];

function TableComponent() {
  const navigate = useNavigate();

  return (
    <div style={{ gridTemplateColumns: '1fr 1fr 1fr' }} className={styles.table}>
      <div className={styles.table__line}>
        <div className={styles.table__title}>
          <p>ФИО</p>
        </div>
        <div className={styles.table__title}>
          <p>Группа</p>
        </div>
        <div className={styles.table__title}>
          <p>Направление подготовки</p>
        </div>
      </div>
      {STUDENTS &&
        STUDENTS.map(student => (
          <div
            style={{ cursor: 'pointer', color: 'inherit' }}
            className={styles.table__line}
            key={student.id}
            onClick={() => navigate(`/users/${student.id}`)}
          >
            <div className={styles.table__item}>{student.name}</div>
            <div className={styles.table__item}>{student.group}</div>
            <div style={{ display: 'flex' }} className={styles.table__item}>
              {student.direction}
            </div>
          </div>
        ))}
    </div>
  );
}

export const Table = memo(TableComponent);

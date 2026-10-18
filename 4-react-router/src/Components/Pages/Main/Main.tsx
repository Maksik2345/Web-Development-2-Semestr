import { JSX, memo } from 'react';
import styles from './Styles.module.scss';

const SERVICES = [
  {
    name: '1',
    icon: '1.jpg',
  },
  {
    name: '2',
    icon: '5.jpg',
  },
  {
    name: '3',
    icon: '9.jpg',
  },
];

function MainComponent(): JSX.Element {
  return (
    <div className={styles.main}>
      {SERVICES.map(service => (
        <a key={service.name} className={styles.main__service} href={`/`}>
          <img src={service.icon} />
          <p className={styles.main__service__title}>{service.name}</p>
        </a>
      ))}
    </div>
  );
}

export const Main = memo(MainComponent);

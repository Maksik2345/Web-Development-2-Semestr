import { JSX, memo } from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';

function SmartCounterComponent(): JSX.Element {
  //const intervalRef = useRef<number | null>(null);

  /* const startAutoIncrement = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 100);
  };

  const stopAutoIncrement = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }; */

  return <div className={styles.smartCounter}>SmartCounter</div>;
}

export const SmartCounter = memo(SmartCounterComponent);

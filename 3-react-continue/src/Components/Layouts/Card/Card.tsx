import { JSX, memo } from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';

interface CardProps {}

function CardComponent(): JSX.Element {
  return <div className={styles.card}>Card</div>;
}

export const Card = memo(CardComponent);

import { JSX, memo, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';

interface CardProps {
  title: string;
  children: ReactNode;
  isHighlighted?: boolean;
}

function CardComponent({ title, children, isHighlighted = false }: CardProps): JSX.Element {
  return (
    <div className={cn(styles.card, isHighlighted ? styles.card_highlighted : styles.card_default)}>
      <h3 className={styles.card__title}>{title}</h3>
      <div className={styles.card__content}>{children}</div>
    </div>
  );
}

export const Card = memo(CardComponent);

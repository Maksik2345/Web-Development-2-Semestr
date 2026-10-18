import { memo } from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import styles from './LeftLinks.module.scss';

type LeftLinksComponentProps = {
  links: { name: string; link: string }[];
};

function LeftLinksComponent({ links }: LeftLinksComponentProps) {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.container__links}>
        {links.map(el => (
          <Link
            key={el.link}
            to={el.link}
            className={cn(styles.container__link, pathname === el.link && styles.container__link_active)}
          >
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export const LeftLinks = memo(LeftLinksComponent);

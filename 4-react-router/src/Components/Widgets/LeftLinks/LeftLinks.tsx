import { memo } from 'react';
import styles from './leftLinks.module.scss';
import { Link } from 'react-router-dom';

type LeftLinksComponentProps = {
  links: { name: string; link: string }[];
};

function LeftLinksComponent({ links }: LeftLinksComponentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container__links}>
        {links.map(el => (
          <Link to={''} className={`TODO ME`}>
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export const LeftLinks = memo(LeftLinksComponent);

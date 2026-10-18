import { JSX, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/Components/Widgets/Header';
import { LeftLinks } from '@/Components/Widgets/LeftLinks';
import styles from './Styles.module.scss';

const LINKS = [
  { name: 'Главная', link: '/' },
  { name: 'Пользователи', link: '/users' },
  { name: 'Добавить пользователя', link: '/users/create' },
];

function OutletWrapperComponent(): JSX.Element {
  return (
    <div className={styles.outletWrapper}>
      <Header />
      <div className={styles.outletWrapper__body}>
        <LeftLinks links={LINKS} />
        <main className={styles.outletWrapper__content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export const OutletWrapper = memo(OutletWrapperComponent);

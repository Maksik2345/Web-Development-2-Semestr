import { JSX, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/Components/Widgets/Header';
import styles from './Styles.module.scss';

function OutletWrapperComponent(): JSX.Element {
  return (
    <div className={styles.outletWrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export const OutletWrapper = memo(OutletWrapperComponent);

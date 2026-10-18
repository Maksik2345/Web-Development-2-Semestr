import { memo, useEffect, useRef } from 'react';
import styles from './Styles.module.scss';
import useOutsideClick from '@/Hooks/useClickOutside';

const PopupComponent = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: () => void;
  radius?: number;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useOutsideClick(popupRef, () => (onClose ? onClose() : undefined), ['button', 'a[href]', 'p']);

  useEffect(() => {
    window.scrollX = 0;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    return () => {
      const scrollY = parseInt(document.body.style.top || '0');
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, -scrollY);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div ref={popupRef} className={`${styles.container__content}`}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export const Popup = memo(PopupComponent);

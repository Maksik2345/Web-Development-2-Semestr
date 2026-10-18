import { memo, useEffect, useRef } from 'react';
import styles from './Styles.module.scss';
import useOutsideClick from '@/Hooks/useClickOutside';
import { Icon } from '@/Components/UI/Icon';

const PopupComponent = ({
  children,
  onClose,
  displayCloseButton,
  radius = 12,
  backgroundColor = 'transparent',
  width,
}: {
  children: React.ReactNode;
  onClose?: () => void;
  displayCloseButton?: boolean;
  backgroundColor?: string;
  width?: number;
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
    <div style={{ backgroundColor: backgroundColor }} className={styles.container}>
      <div className={styles.container__wrapper}>
        <div
          style={{ borderRadius: `${radius}px`, width: width ? `${width}vw` : 'auto' }}
          onClick={e => e.stopPropagation()}
          ref={popupRef}
          className={`${styles.container__content} scroll`}
        >
          {children}
          {displayCloseButton && (
            <Icon
              onClick={onClose}
              className={styles.container__close}
              pointer
              size={24}
              glyph="close"
              glyphColor="grey"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Popup = memo(PopupComponent);

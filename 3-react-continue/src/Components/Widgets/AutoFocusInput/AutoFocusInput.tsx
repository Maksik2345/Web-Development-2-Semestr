import { JSX, memo, useEffect, useRef } from 'react';
import { Card } from '@/Components/Layouts/Card';
import styles from './Styles.module.scss';

function AutoFocusInputComponent(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('Компонент смонтирован');
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) {
      return;
    }

    const handleInput = () => {
      console.log('Новое содержимое:', input.value);
    };

    input.addEventListener('input', handleInput);

    return () => {
      input.removeEventListener('input', handleInput);
    };
  }, []);

  const onClickClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const onClickShow = () => {
    const value = inputRef.current?.value ?? '';
    alert(value || 'Поле пустое');
  };

  return (
    <Card title="Автофокус">
      <div className={styles.autoFocusInput}>
        <input ref={inputRef} className={styles.autoFocusInput__input} type="text" placeholder="Введите текст" />
        <div className={styles.autoFocusInput__buttons}>
          <button className={styles.autoFocusInput__button} type="button" onClick={onClickClear}>
            Очистить
          </button>
          <button className={styles.autoFocusInput__button} type="button" onClick={onClickShow}>
            Показать сообщение
          </button>
        </div>
      </div>
    </Card>
  );
}

export const AutoFocusInput = memo(AutoFocusInputComponent);

import { JSX, memo } from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';

interface AutoFocusInputProps {}

function AutoFocusInputComponent(): JSX.Element {
  /* 
  Для установки фокуса используйте focus()
  Для вывода сообщения используйте alert('<message>')
   */
  return <input className={styles.autoFocusInput} />;
}

export const AutoFocusInput = memo(AutoFocusInputComponent);

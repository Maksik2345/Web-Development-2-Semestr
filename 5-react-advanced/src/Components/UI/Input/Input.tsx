import { JSX, memo, useEffect, useRef } from 'react';
import styles from './Styles.module.scss';
import cn from 'classnames';

type InputProps = (
  | {
      type: 'number';
      onChange: (value: number | null) => void;
      value: number | null;
    }
  | {
      type: 'text' | 'search' | 'date' | 'password';
      value: string | null;
      onChange: (value: string) => void;
    }
) & {
  placeholder?: string;
  className?: string;
  label?: string;
  pseudoContent?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
  isRequired?: boolean;
};

function InputComponent({
  type,
  value,
  placeholder,
  onChange,
  className,
  label,
  pseudoContent,
  disabled,
  isRequired,
  name,
  error,
}: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const changeValue = (value: string) => {
    if (type === 'number') {
      onChange(value === '' ? null : Number(value));
    } else {
      onChange(value);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      inputRef.current?.blur();
      e.stopPropagation();
    };

    const input = inputRef.current;
    if (input && type === 'number') {
      input.addEventListener('wheel', handleWheel);
      return () => {
        input.removeEventListener('wheel', handleWheel);
      };
    }
  }, [type]);

  return (
    <div>
      {(label || disabled) && (
        <div className={styles.input__labelBlock}>
          <p className={styles.input__label}>{label ? label : placeholder}</p>
          {isRequired && <span className={styles.input__required}>*</span>}
        </div>
      )}
      <div
        style={pseudoContent ? ({ '--pseudoContent': `"${pseudoContent}"` } as React.CSSProperties) : {}}
        className={cn(styles.input, className, error && styles.input_error, type === 'number' && styles.input_number)}
      >
        <input
          disabled={disabled}
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          className={cn(styles.input__input)}
          type={type}
          value={value !== null ? value : ''}
          onChange={e => changeValue(e.target.value)}
        />
      </div>
      {error && <p className={styles.input__error}>{error}</p>}
    </div>
  );
}

export const Input = memo(InputComponent);

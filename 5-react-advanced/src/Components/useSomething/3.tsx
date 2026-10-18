import { useState } from 'react';

export const KeyboardShortcut = () => {
  const [count] = useState(0);

  // Нужно подписаться на нажатие клавиши Escape
  // Какой хук использовать? Объясни выбор

  // Напиши итоговый вывод по выполненным заданиям своими словами когда какой хук использовать

  return <div>Нажатий Escape: {count}</div>;
};

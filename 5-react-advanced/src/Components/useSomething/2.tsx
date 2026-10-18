import { useRef, useState } from 'react';

export const Tooltip = ({ text }: { text: string }) => {
  const [position, setPosition] = useState(0);
  const tooltipRef = useRef(null);

  // Нужно измерить ширину подсказки и сдвинуть её,
  // чтобы не вылезала за край экрана
  // Какой хук использовать? Объясни выбор

  return <div ref={tooltipRef}>{text}</div>;
};

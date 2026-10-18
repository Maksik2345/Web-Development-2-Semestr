import { useState } from 'react';

export const UserProfile = ({ userId }: { userId: string }) => {
  const [user] = useState<{ id: string; name: string } | null>(null);

  // Мы ожидаем данные с сервера по userId
  // Какой хук использовать здесь?
  // (выбери: useEffect или useLayoutEffect) и кратко объясни свою позицию

  return <div>{user?.name}</div>;
};

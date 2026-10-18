import { createContext } from 'react';

export interface UserContextValue {
  id: string | null;
  username: string | null;
  role: 'admin' | 'user' | null;
}

export const UserContext = createContext<UserContextValue>({
  id: null,
  username: null,
  role: null,
});

import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string | null;
  username: string | null;
  role: 'admin' | 'user' | null;
}

const initialState: User[] = [
  {
    id: nanoid(),
    username: 'Администратор',
    role: 'admin',
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: state => {
      state.push({
        id: nanoid(),
        username: `Новый пользователь № ${state.length}`,
        role: 'user',
      });
    },
    removeUser: (state, action: PayloadAction<string | null>) => {
      return state.filter(user => user.id !== action.payload);
    },
    toggleRole: (state, action: PayloadAction<string | null>) => {
      const user = state.find(user => user.id === action.payload);
      if (user) {
        user.role = user.role === 'admin' ? 'user' : 'admin';
      }
    },
  },
});

export const { addUser, removeUser, toggleRole } = userSlice.actions;
export default userSlice.reducer;

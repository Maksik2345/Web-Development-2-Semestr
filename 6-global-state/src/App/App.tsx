import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextComponent } from '@/Components/Pages/ContextComponent';
import { UserContext, UserContextValue } from '@/Contexts/UserContext';
import '../Styles/index.scss';
import './Styles.scss';

const currentUser: UserContextValue = {
  id: '1',
  username: 'Максим',
  role: 'admin',
};

function AppComponent() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/context" element={<ContextComponent />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export const App = AppComponent;

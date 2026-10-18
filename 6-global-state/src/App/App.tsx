import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextComponent } from '@/Components/Pages/ContextComponent';
import { ReduxComponent } from '@/Components/Pages/ReduxComponent';
import { UserContext, UserContextValue } from '@/Contexts/UserContext';
import { userStore } from '@/Stores/userStore';
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
      <Provider store={userStore}>
        <UserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<ReduxComponent />} />
            <Route path="/context" element={<ContextComponent />} />
          </Routes>
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export const App = AppComponent;

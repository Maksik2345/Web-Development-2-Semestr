import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddUserPopup } from '@/Components/Pages/AddUserPopup';
import { Login } from '@/Components/Pages/Login';
import { Main } from '@/Components/Pages/Main';
import { NotFoundPage } from '@/Components/Pages/NotFoundPage';
import { Table } from '@/Components/Pages/Table';
import '../Styles/index.scss';
import './Styles.scss';

function AppComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Table />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/create" element={<AddUserPopup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export const App = AppComponent;

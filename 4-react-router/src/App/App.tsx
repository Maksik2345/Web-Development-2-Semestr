import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OutletWrapper } from '@/Components/Layouts/OutletWrapper';
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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<OutletWrapper />}>
          <Route index element={<Main />} />
          <Route path="/users" element={<Table />} />
          <Route path="/users/create" element={<AddUserPopup />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export const App = AppComponent;

import { BrowserRouter } from 'react-router-dom';
import { CreateUser } from '@/Components/Pages/CreateUser';
import '../Styles/index.scss';
import './Styles.scss';

function AppComponent() {
  return (
    <BrowserRouter>
      <CreateUser />
    </BrowserRouter>
  );
}

export const App = AppComponent;

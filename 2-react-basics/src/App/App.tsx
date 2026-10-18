import { Greeting } from '@/Components/Widgets/Greeting';
import { UserCard } from '@/Components/Widgets/UserCard';
import '../Styles/index.scss';
import '../Styles/variables.scss';

function AppComponent() {
  return (
    <>
      <Greeting />
      <UserCard name="Иван Петров" age={20} email="ivan@example.com" isStudent={true} />
      <UserCard name="Мария Смирнова" age={34} email="maria@example.com" isStudent={false} />
    </>
  );
}

export const App = AppComponent;

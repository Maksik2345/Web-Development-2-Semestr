import { Greeting } from '@/Components/Widgets/Greeting';
import { TaskCard } from '@/Components/Widgets/TaskCard';
import { UserCard } from '@/Components/Widgets/UserCard';
import '../Styles/index.scss';
import '../Styles/variables.scss';

function AppComponent() {
  return (
    <>
      <Greeting />
      <UserCard name="Иван Петров" age={20} email="ivan@example.com" isStudent={true} />
      <UserCard name="Мария Смирнова" age={34} email="maria@example.com" isStudent={false} />
      <TaskCard
        title="Сделать задания по React"
        subtitle="Блок «React: введение», задания 1–4"
        comment="Не забыть сделать коммит после каждого задания"
      />
      <TaskCard title="Подготовиться к защите" subtitle="Повторить пропсы и interface" />
    </>
  );
}

export const App = AppComponent;

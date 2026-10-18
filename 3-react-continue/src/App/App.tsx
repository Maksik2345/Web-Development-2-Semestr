import { Card } from '@/Components/Layouts/Card';
import { Login } from '@/Components/Widgets/Login';
import { UserList } from '@/Components/Widgets/UserList';
import { User } from '@/Models/User';
import '../Styles/index.scss';
import '../Styles/variables.scss';

const USERS: User[] = [
  { id: 1, name: 'Иван Петров', age: 20, city: 'Екатеринбург' },
  { id: 2, name: 'Мария Смирнова', age: 34, city: 'Москва' },
  { id: 3, name: 'Алексей Кузнецов', age: 21, city: 'Казань' },
];

function AppComponent() {
  return (
    <>
      <Card title="Обычный текст">
        <p>Компонент Card — обёртка: он рисует рамку и заголовок, а содержимое получает через children.</p>
      </Card>

      <Card title="Список тем блока" isHighlighted={true}>
        <ul>
          <li>children</li>
          <li>Вывод списков и key</li>
          <li>useState</li>
          <li>useEffect и useRef</li>
        </ul>
      </Card>

      <Card title="Картинка">
        <img src="/avatar.png" alt="Майк Вазовски" />
      </Card>

      <UserList users={USERS} />
      <Login />
    </>
  );
}

export const App = AppComponent;

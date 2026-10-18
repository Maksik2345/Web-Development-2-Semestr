import { Card } from '@/Components/Layouts/Card';
import '../Styles/index.scss';
import '../Styles/variables.scss';

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
        <img src="/avatar.png" alt="Пример изображения" />
      </Card>
    </>
  );
}

export const App = AppComponent;

import '../Styles/index.scss';
import styles from './Styles.module.scss';

function AppComponent() {
  return (
    <>
      <h2 className={styles.title}>Hello React World!</h2>
    </>
  );
}

export const App = AppComponent;

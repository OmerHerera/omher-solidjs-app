import logo from './logo.svg';
import styles from './App.module.css';
import SimpleComponent from './components/SimpleComponent';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <SimpleComponent/>
      </header>
    </div>
  );
}

export default App;

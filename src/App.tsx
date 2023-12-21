import { Body } from "./components/Body";
import { Info } from "./components/Info";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <div className={styles.page}>
        <NewTask />

        <div className={styles.body}>
          <Info />
          <Body />
        </div>
      </div>
    </div>
  );
}

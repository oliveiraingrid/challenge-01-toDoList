import ClipBoard from "../assets/Clipboard.png";
import styles from "./Body.module.css";
import { Task } from "./Task.tsx";

export function Body() {
  return (
    <section className={styles.containerBody}>

      <div className={styles.listTask}>
        <Task/>
        <Task/>
      </div>

      <div className={styles.bodyEmpty}>
        <img className={styles.clipBoard} src={ClipBoard} alt="" />

        <p className={`${styles.text} ${styles.textBold}`}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p className={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </section>
  );
}

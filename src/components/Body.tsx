import ClipBoard from "../assets/Clipboard.png";
import styles from "./Body.module.css";
import { Task } from "./Task.tsx";

export function Body() {
  return (
    <section className={styles.containerBody}>

      <div className={styles.listTask}>
        <Task/>
        <Task/>
        <Task/>
        
      </div>

      <img className={styles.clipBoard} src={ClipBoard} alt="" />

      <p className={`${styles.text} ${styles.textBold}`}>
        Você ainda não tem tarefas cadastradas{" "}
      </p>
      <p className={`${styles.text} ${styles.textSimple}`}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  );
}

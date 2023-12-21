import styles from "./Info.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <span className={`${styles.text} ${styles.textBlue}`}>
          Tarefas Criadas
        </span>
        <span className={styles.counter}>0</span>
      </div>

      <div className={styles.created}>
        <span className={`${styles.text} ${styles.textPurple}`}>
          Concluídas
        </span>
        <span className={styles.counter}>0</span>
      </div>
    </div>
  );
}

import CheckOut from "../assets/CheckOut.svg";
import Trash from "../assets/Trash.svg";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.containerTask}>
        <button className={styles.check}>
          <img src={CheckOut} alt="Concluído" />
        </button>

        <p className={styles.text}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>

        <button className={styles.delete} title="Deletar Task">
          <img src={Trash} alt="" />
        </button>
      </div>
    </div>
  );
}

import ButtonPlus from "../assets/plus.svg";
import styles from "./NewTask.module.css"

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <img src={ButtonPlus} alt="Botão Criar Task" />
      </button>
    </div>
  );
}

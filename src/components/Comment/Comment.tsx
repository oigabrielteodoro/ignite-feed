import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/oigabrielteodoro.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Teodoro</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentários">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Gabriel, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

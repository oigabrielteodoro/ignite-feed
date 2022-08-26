import { ThumbsUp, Trash } from "phosphor-react";
import { PostComment } from "../../types/Post";

import Avatar from "../Avatar";

import styles from "./Comment.module.css";

type Props = {
  comment: PostComment;
};

export default function Comment({ comment }: Props) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/oigabrielteodoro.png" hasBorder={false} />

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
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
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

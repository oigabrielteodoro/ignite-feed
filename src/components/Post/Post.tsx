import Comment from "../Comment";
import styles from "./Post.module.css";

type Props = {
  author: string;
  content: string;
};

export default function Post({ author, content }: Props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/oigabrielteodoro.png"
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Teodoro</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <ul className={styles.commentList}>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
      </ul>
    </article>
  );
}

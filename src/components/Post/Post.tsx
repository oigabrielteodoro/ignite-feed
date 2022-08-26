import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ContentType, Post as PostType } from "../../types/Post";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const publishedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === ContentType.LINK) {
            return (
              <p>
                <a href="#" key={line.content}>
                  {line.content}
                </a>
              </p>
            );
          }

          return <p>{line.content}</p>;
        })}
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

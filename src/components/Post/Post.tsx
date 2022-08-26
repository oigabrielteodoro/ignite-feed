import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

import { ContentType, Post as PostType, PostComment } from "../../types/Post";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState<PostComment[]>([]);

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

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments((prevState) => [
      ...prevState,
      { author: post.author, publishedAt: new Date(), content: newCommentText },
    ]);

    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.currentTarget.value);
  }

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
              <p key={line.content}>
                <a href="#" key={line.content}>
                  {line.content}
                </a>
              </p>
            );
          }

          return <p key={line.content}>{line.content}</p>;
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <ul className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.publishedAt.toISOString()} comment={comment} />
        ))}
      </ul>
    </article>
  );
}

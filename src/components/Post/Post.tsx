type Props = {
  author: string;
  content: string;
};

export default function Post({ author, content }: Props) {
  return (
    <article>
      <h1>{author}</h1>
      <p>{content}</p>
    </article>
  );
}

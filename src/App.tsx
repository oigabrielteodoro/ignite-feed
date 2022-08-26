import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { ContentType, Post as PostType } from "./types/Post";

const posts: PostType[] = [
  {
    id: 1,
    content: [
      { type: ContentType.PARAGRAPH, content: "Fala galeraa 👋" },
      {
        type: ContentType.PARAGRAPH,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: ContentType.LINK,
        content: "👉 jane.design/doctorcare",
      },
    ],
    author: {
      name: "Gabriel Teodoro",
      avatarUrl: "https://github.com/oigabrielteodoro.png",
      role: "Front-End Developer @ Finbits",
    },
    publishedAt: new Date("2022-08-25 20:00:00"),
  },
  {
    id: 2,
    content: [
      { type: ContentType.PARAGRAPH, content: "Fala galeraa 👋" },
      {
        type: ContentType.PARAGRAPH,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: ContentType.LINK,
        content: "👉 jane.design/doctorcare",
      },
    ],
    author: {
      name: "Diego Fernandes",
      avatarUrl: "https://github.com/diego3g.png",
      role: "CTO @ Rocketseat",
    },
    publishedAt: new Date("2022-08-16 20:00:00"),
  },
];

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}

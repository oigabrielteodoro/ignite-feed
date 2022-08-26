import Header from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import Post from "./components/Post";

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside></aside>
        <main>
          <Post
            author="Gabriel Teodoro"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumends odio aliquan"
          />
          <Post author="Diego Fernandes" content="Um novo post muito legal" />
        </main>
      </div>
    </>
  );
}

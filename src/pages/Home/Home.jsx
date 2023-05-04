import styles from "./assets/css/home.module.css";

import posts from "assets/json/posts.json";
import Post from "components/Post/Post";

export default function Home() {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

import PostCard from "components/PostCard/PostCard";
import styles from "./assets/css/home.module.css";

import posts from "assets/json/posts.json";

export default function Home() {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

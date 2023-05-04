import styles from "./assets/css/post.module.css";

export default function Post({post}) {
    return (
        <div className={styles.post}>
            <img
                className={styles.cover}
                src={`assets/posts/${post.id}/capa.png`}
                alt=""
            />

            <h2 className={styles.title}>{post.titulo}</h2>

            <button className={styles.readButton}>Read</button>
        </div>
    )
}
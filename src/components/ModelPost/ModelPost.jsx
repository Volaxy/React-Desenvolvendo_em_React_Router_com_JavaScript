import styles from "./assets/css/postModel.module.css";

export default function ModelPost({children, coverPhoto, title}) {
    return (
        <article className={styles.containerModelPost}>
            <div
                className={styles.coverPhoto}
                style={{backgroundImage: `url(${coverPhoto})`}}
            ></div>

            <h2 className={styles.title}>{title}</h2>

            <div className={styles.containerContentPost}>{children}</div>
        </article>
    )
}

import { Link } from "react-router-dom";
import styles from "./assets/css/postCard.module.css";
import Button from "components/Button/Button";

export default function PostCard({post}) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.cover}
                    // When we indicate an address that does not start with a slash, it is understood as relative to the current address, so that it accesses the path correctly, it is necessary to put a "/" at the beginning of the "src" attribute
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt=""
                />

                <h2 className={styles.title}>{post.titulo}</h2>
                
                <Button>Read</Button>
            </div>
        </Link>
    )
}
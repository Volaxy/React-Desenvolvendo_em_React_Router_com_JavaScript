import coloredCircle from "assets/colored_circle.png";
import myPhoto from "assets/my_photo.png";

import styles from "./assets/css/banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Hello, World!
                </h1>

                <p className={styles.paragraph}>
                    Welcome to my personal space! I'm Antônio Evaldo, Front-end instructor at Alura. Here I share a lot of knowledge, I hope you learn something new :)
                </p>
            </div>

            <div className={styles.images}>
                <img
                    className={styles.coloredCircle}
                    src={coloredCircle}
                    alt=""
                    aria-hidden={true}
                />

                <img
                    className={styles.myPhoto}
                    src={myPhoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}

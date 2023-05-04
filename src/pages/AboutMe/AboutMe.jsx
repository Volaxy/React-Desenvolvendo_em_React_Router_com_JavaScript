import styles from "./assets/css/aboutMe.module.css";

import coverPhoto from "assets/sobre_mim_capa.png";
import photoAboutMe from "assets/sobre_mim_foto.png";

import ModelPost from "components/ModelPost/ModelPost";

export default function AboutMe() {
    return (
        <ModelPost
            coverPhoto={coverPhoto}
            title={"About me"}
        >
            <h3 className={styles.subtitle}>
                Hello, I am Volax
            </h3>

            <img
                className={styles.photoAboutMe}
                src={photoAboutMe}
                alt="Myself"
            />

            <p className={styles.paragraph}>
                Hey how's it going? I'm a Front-end instructor at Alura and I'm happy to see you here.
            </p>

            <p className={styles.paragraph}>
                My history with programming began at the Federal Institute of Piauí (IFPI), when I attended high school integrated with the Computer Science course. I learned programming logic and the basics of several languages, such as PHP, Python, Java, but without going too deep into each one of them. I really enjoyed studying programming, but at the time I had no idea that I would work with it today.
            </p>

            <p className={styles.paragraph}>
                In higher education, I chose to study Electrical Engineering at the Federal University of Piauí (UFPI). There I managed to enter the PET (Tutorial Education Program), an academic group that contributes in various ways to the course. There I had the opportunity to study web development to be one of their website maintainers.
            </p>

            <p className={styles.paragraph}>
                With that I had my dev experience closer to reality, with implementation deadlines for the website, and I learned a lot while coding.
            </p>

            <p className={styles.paragraph}>
                And it was while I was at PET that I decided to look for an internship in web development. I found a job at Alura for the Scuba Team and realized that it combined two passions of mine: programming and education. To my happiness, I was chosen to be part of the team.
            </p>

            <p className={styles.paragraph}>
                Since then, it's been just learning after learning. Alura is a school not only for its students, but also for its employees. Today I am very happy to have the opportunity to bring this rich and charming content to you. Hope you learn a lot!
            </p>
        </ModelPost>
    )
}

import styles from "./assets/css/footer.module.css";

import { ReactComponent as Trademark } from "assets/marca_registrada.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Trademark />

            Developed by Volaxy
        </footer>
    )
}
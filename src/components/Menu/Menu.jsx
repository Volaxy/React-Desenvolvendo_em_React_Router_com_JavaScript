import styles from "components/Menu/assets/css/menu.module.css";
import MenuLink from "./MenuLink/MenuLink";

export default function Menu() {
    return (
        <header>
            <nav className={styles.navigation}>
                <MenuLink to={"/"}>
                    Home
                </MenuLink>

                <MenuLink to={"/about-me"}>
                    About me
                </MenuLink>
            </nav>
        </header>
    )
}

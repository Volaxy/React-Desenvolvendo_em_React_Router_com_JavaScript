import styles from "./assets/css/button.module.css";

export default function Button({children, height}) {
    return (
        <button className={`
            ${styles.button}
            ${styles[height]} // The value between the "[]" is added like "styles.lg", where the word after the dot is the class name passed by the props
        `}>
            {children}
        </button>
    )
}

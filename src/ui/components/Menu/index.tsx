import styles from "./styles.module.css";
import KeyList from "@components/KeyList";

export const Menu = () => {
    return (<ul className={styles.list}>
        <KeyList />
    </ul>)
}
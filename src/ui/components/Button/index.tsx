import type {IconType} from "react-icons";

import styles from "./styles.module.css";

export type ButtonProps = {
    Icon: undefined | IconType;
    label: string;
}

export const Button = ({Icon, label}: ButtonProps) => {
    return (
        <button className={styles.button}>
            { Icon && <Icon width={24} height={24} className={styles.icon}/>}
            <p>{label}</p>
        </button>
    )
}
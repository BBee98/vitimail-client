import type {IconType} from "react-icons";

import styles from "./styles.module.css";
import cx from "classnames";

export type ButtonProps = {
    Icon: undefined | IconType;
    label: string;
    className?: string;
}

export const Button = ({Icon, label, className}: ButtonProps) => {

    const buttonCSS = cx({
        [styles.button]: true,
        [className ?? ""]: true,
    })

    return (
        <button className={buttonCSS}>
            { Icon && <Icon width={24} height={24} className={styles.icon}/>}
            <p>{label}</p>
        </button>
    )
}
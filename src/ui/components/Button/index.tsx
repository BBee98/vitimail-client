import type {IconType} from "react-icons";

import styles from "./styles.module.css";
import cx from "classnames";

export type ButtonProps = {
    Icon: undefined | IconType;
    label: string;
    className?: string;
    handleOnClick: () => void
}

export const Button = ({Icon, label, className, handleOnClick}: ButtonProps) => {

    const buttonCSS = cx({
        [styles.button]: true,
        [className ?? ""]: true,
    })

    return (
        <button className={buttonCSS} onClick={handleOnClick}>
            { Icon && <Icon width={24} height={24} className={styles.icon}/>}
            <p>{label}</p>
        </button>
    )
}
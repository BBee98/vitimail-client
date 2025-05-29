import styles from './styles.module.css'
import cx from "classnames";
import type {ReactNode} from "react";

type EmailTemplateProps = {
    className?: string;
    children?: ReactNode;
}

export const EmailTemplate = ({ className = ""}: EmailTemplateProps) => {

    const templateCSS = cx({
        [styles.container]: true,
        [className]: true,
    })

    return (
        <article className={templateCSS}>

        </article>)
}
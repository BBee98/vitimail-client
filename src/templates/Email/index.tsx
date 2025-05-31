import {type ReactNode} from "react";
import {useRouterComponents} from "@/hooks/useRouterComponents.ts";

import styles from './styles.module.css'
import cx from "classnames";
import {ComponentList} from "@/components";

type EmailTemplateProps = {
    className?: string;
    children?: ReactNode;
}

export const EmailTemplate = ({className = ""}: EmailTemplateProps) => {

    const {
        context: {
            routerComponents: components,
        }
    } = useRouterComponents()

    const templateCSS = cx({
        [styles.container]: true,
        [className]: true,
    })

    return (
        <article className={templateCSS}>
            {components?.map(key =>ComponentList[key]) }
        </article>)
}
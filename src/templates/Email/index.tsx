import {ComponentList} from "@domain/Component";
import {useRouterComponents} from "@/hooks/useRouterComponents.ts";
import {type ReactNode} from "react";
import cx from "classnames";

import styles from './styles.module.css'

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
            {components?.map((key, index) => {
                const Tag = ComponentList[key];
                return <Tag key={`${index}-${key}`} id={key}/>
            })}
        </article>)
}
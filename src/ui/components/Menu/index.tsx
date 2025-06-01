import styles from "./styles.module.css";
import type {KeyListProps} from "@domain/Key.ts";
import {KeyList} from "@domain/Key.ts";
import {Button} from "@ui-components/Button";
import {useRouterComponents} from "@hooks/useRouterComponents.ts";
import {useTranslation} from "react-i18next";

export const Menu = () => {

    const {
        context: {
            setRouterComponents
        }
    } = useRouterComponents();
    const {t} = useTranslation()


    return (<ul className={styles.list}>
        {
            KeyList.map(({id, icon}: KeyListProps) => {
                return (<li key={id} id={id} className={styles.key}>
                    <Button className={styles.uppercaseText} Icon={icon} label={t(`components.${id}`)}
                            handleOnClick={() =>
                                setRouterComponents && setRouterComponents(prevState => [...prevState, id])}/>
                </li>)
            })
        }
    </ul>)
}
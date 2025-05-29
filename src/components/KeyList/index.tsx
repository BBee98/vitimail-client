import {KeyList, type KeyListProps} from "./list.ts";
import {Button} from "@ui-components/Button";
import {useTranslation} from "react-i18next";

import styles from "./styles.module.css";

const Index = () => {

    const { t } = useTranslation()

    return (
        <>{
            KeyList.map(({id, icon}: KeyListProps) => {
                return (<li key={id} id={id} className={styles.key}>
                    <Button className={styles.uppercaseText} Icon={icon} label={t(`components.${id}`)}/>
                </li>)
            })
        }</>
    )
}

export default Index;
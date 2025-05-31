import {KeyList, type KeyListProps} from "./list.ts";
import {Button} from "@ui-components/Button";
import {useTranslation} from "react-i18next";

import styles from "./styles.module.css";
import {useRouterComponents} from "@/hooks/useRouterComponents.ts";

const Index = () => {

    const {
        context: {
            setRouterComponents
        }
    } = useRouterComponents();
    const {t} = useTranslation()

    return (
        <>{
            KeyList.map(({id, icon}: KeyListProps) => {
                return (<li key={id} id={id} className={styles.key}>
                    <Button className={styles.uppercaseText} Icon={icon} label={t(`components.${id}`)}
                            handleOnClick={() => setRouterComponents && setRouterComponents(prevState => [...prevState, id])}/>
                </li>)
            })
        }</>
    )
}

export default Index;
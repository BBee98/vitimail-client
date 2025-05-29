import {type KeyListProps, KeyList} from "./list.ts";
import {Button} from "@ui-components/Button";

import styles from "./styles.module.css";

const Index = () => {
    return (
        <>{
            KeyList.map(({id, label, icon}: KeyListProps) => {
                return (<li key={id} id={id} className={styles.key}>
                    <Button Icon={icon} label={label}/>
                </li>)
            })
        }</>
    )
}

export default Index;
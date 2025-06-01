import type {Component} from "@domain/types.ts";
import {CustomizationBar} from "@components/CustomizationBar";

import styles from "./styles.module.css";

const Index: Component = ({id}) => {
    return (
        <CustomizationBar id={id}>
            <p className={styles.textBlock}>TextBlock</p>
        </CustomizationBar>
        )
}

export default Index;
import type {ReactNode} from "react";
import type {Key} from "@domain/types.ts";
import {ComponentCustomizationOptions} from "@domain/Component.ts";
import type {CustomizationOptionsProps} from "@domain/Customization/types.ts";
import {CustomizationList} from "@domain/Customization/List.ts";

import styles from "./styles.module.css";

const OptionTab = ({ options }: { options: Array<keyof CustomizationOptionsProps> }) => {
    return (
        <>
            { options?.map( (key) => {
                const props = CustomizationList[key];
                const IconTag = props.icon;
                return IconTag && <IconTag key={key} />
            })}
        </>
    )
}

export const CustomizationBar = ({id, children}: {
    id: Key,
    children: ReactNode}) => {

    return <ul>
        { ComponentCustomizationOptions[id].map( (option) => {
            const availableOptions: Array<keyof CustomizationOptionsProps> = Object.keys(option).filter( k => option[k as keyof CustomizationOptionsProps] )
            return availableOptions.length > 0 && <OptionTab options={availableOptions} />
        })}
        <div tabIndex={0} className={styles.customizeBar}>{children}</div>
    </ul>
}
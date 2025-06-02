import type {ReactNode} from "react";
import type {Key} from "@domain/types.ts";
import {ComponentCustomizationOptions} from "@domain/Component.ts";
import type {CustomizationOptionsProps, CustomizationProps} from "@domain/Customization/types.ts";
import {CustomizationList} from "@domain/Customization/List.ts";

import styles from "./styles.module.css";

const OptionTag = ({icon}: CustomizationProps) => {
    const IconTag = icon;
    return <li className={styles.iconWrapper}>{
        IconTag && <IconTag className={styles.icon}/>
    }</li>
}


const OptionBar = ({ options }: { options: Array<keyof CustomizationOptionsProps> }) => {
    return (
        <ul className={styles.optionBar}>
            {options?.map((key, index) => {
                const props = CustomizationList[key];
                return <OptionTag key={`${key}-${index}`} {...props}/>
            })}
        </ul>
    )
}

export const CustomizationBar = ({id, children}: {
    id: Key,
    children: ReactNode}) => {

    return <div className={styles.wrapper}>
        <div tabIndex={0} className={styles.customizeBar}>{children}</div>
        { ComponentCustomizationOptions[id].map( (option , index) => {
            const availableOptions: Array<keyof CustomizationOptionsProps> = Object.keys(option).filter( k => option[k as keyof CustomizationOptionsProps] )
            return availableOptions.length > 0 && <OptionBar key={`opt-${index}`} options={availableOptions} />
        })}
    </div>
}
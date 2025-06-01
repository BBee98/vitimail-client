import {type CustomizationOptionsProps, type CustomizationProps} from "@domain/Customization/types.ts";
import {RxPadding} from "react-icons/rx";

export const CustomizationList:Record<keyof CustomizationOptionsProps, CustomizationProps> = {
    canPadding: {
        icon: RxPadding
    },
    canBackground: {
        icon: RxPadding
    },
    canColor: {
        icon: RxPadding
    },
    canFontSize: {
        icon: RxPadding
    }
}
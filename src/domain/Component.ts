import TextBlock from "@components/TextBlock";
import type {Component, Key} from "@domain/types.ts";
import type {CustomizationOptionsProps} from "@domain/Customization/types.ts";

import {TEXT_BLOCK_KEY} from "@domain/Key.ts";

export const ComponentList: Record<string, Component> = {
    [TEXT_BLOCK_KEY]: TextBlock
};

export const ComponentCustomizationOptions: Record<Key, Array<CustomizationOptionsProps>> = {
    [TEXT_BLOCK_KEY]: [{
        canPadding: true,
        canBackground: false,
        canColor: false,
        canFontSize: false,
    }]
}
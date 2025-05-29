import {LuLetterText} from "react-icons/lu";

import type {IconType} from "react-icons";
import type {Key} from "@domain/Key.ts";

export type KeyListProps = {
    id: Key,
    label: string,
    icon: IconType
}

export const KeyList: Array<KeyListProps> = [
    {id: 'textblock', label: 'Text Block', icon: LuLetterText}
]
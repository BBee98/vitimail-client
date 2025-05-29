import {LuLetterText} from "react-icons/lu";

import type {IconType} from "react-icons";
import {type Key, TEXT_BLOCK_KEY} from "@domain/Key.ts";

export type KeyListProps = {
    id: Key,
    icon: IconType
}

export const KeyList: Array<KeyListProps> = [
    {id: TEXT_BLOCK_KEY, icon: LuLetterText}
]
import type {FunctionComponent} from "react"
import type {IconType} from "react-icons";

import {TEXT_BLOCK_KEY} from "@domain/Key.ts";

type ComponentProps = {
    id: Key
}

export type Component = FunctionComponent<ComponentProps>

export type Key = typeof TEXT_BLOCK_KEY;

export type KeyListProps = {
    id: Key,
    icon: IconType
}

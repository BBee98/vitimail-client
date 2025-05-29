import type {ReactNode} from "react";
import type {Key} from "./Key.ts";

export type Component = {
    key: Key,
    template: ReactNode
}
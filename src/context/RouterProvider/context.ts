import {createContext, type Dispatch, type SetStateAction} from "react";
import type {Key} from "@domain/Key.ts";

export const RouterComponentsContext = createContext<{
    routerComponents: Array<Key> | undefined,
    setRouterComponents: Dispatch<SetStateAction<Array<Key>>> | undefined
}>(
    {
        routerComponents: undefined,
        setRouterComponents: undefined
    }
)
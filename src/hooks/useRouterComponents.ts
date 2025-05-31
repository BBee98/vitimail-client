import {useContext, useState} from "react";
import type {Key} from "@domain/Key.ts";
import {RouterComponentsContext} from "@context/RouterProvider/context.ts";


export const useRouterComponents = () => {
    const [routerComponents, setRouterComponents] = useState<Array<Key>>([])
    const context = useContext(RouterComponentsContext)

    const setComponents = (key: Key) => {
        setRouterComponents(prevState => {
            return [...prevState, key]
        })
    }

    return {
        context,
        routerComponents,
        setRouterComponents,
        setComponents
    }
}
import {type ReactNode} from "react";

import {RouterComponentsContext} from "./context.ts";
import {useRouterComponents} from "@hooks/useRouterComponents.ts";

export const RouterComponentsProvider = ({children}: { children: ReactNode }) => {
    const {routerComponents, setRouterComponents} = useRouterComponents()
    return (
        <RouterComponentsContext.Provider value={{
            routerComponents,
            setRouterComponents
        }}>
            {children}
        </RouterComponentsContext.Provider>)
};
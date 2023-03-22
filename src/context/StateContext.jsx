import { createContext, useContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({childern}) => {
    const name = "sus"
    const data = {name}
    return (
    <StateContextProvider value = {data}>
        {childern}
    </StateContextProvider>
    )
}

export const StateContextCustom = () => {
    useContext(StateContext)
}
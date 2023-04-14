import { createContext, useContext} from "react";
import React from "react";

const Context =  createContext()

const Provider = ({children}) => {

    const [theme, setTheme] = React.useState("purple")

    const data = {
      theme, setTheme
    }

    return (
        <Context.Provider  value={data}>
            {children}
        </Context.Provider>
    )
}


export const useTheme = () => useContext(Context);

export default Provider;
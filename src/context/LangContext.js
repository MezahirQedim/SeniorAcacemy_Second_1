import { createContext, useContext } from "react";
import React from "react";

const Language = createContext();


const Provider = ({children}) => {

    const en = {
        home: "Home",
        service: "Service",
        users: "Users",
        form : "Form",
        search: "Search",
        change: "Change",
        theme: "Theme", 
        table: "Table"

    }

    const az = {
        home: "Ev",
        service: "Servis",
        users: "Istifadeciler",
        form: "Forma",
        search: "Axtar",
        change: "Deyis",
        theme: "Tema",
        table: "Cedvel"
    }

    const [change, setChange] = React.useState(az)


    const data = {
        en, 
        az, 
        change,
        setChange
    }


    return (
        <Language.Provider value={data} >
            {children}
        </Language.Provider>
    )
}


export const  useLang = ()=>  useContext (Language)

export default Provider
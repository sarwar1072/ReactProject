import { createContext, useState } from "react";

export const Context=createContext();

export const Context1Provider=({children})=>{

    const [a,setA]=useState("Hellow World");

    return (
        <Context.Provider value={[a,setA]}>
               {children}
        </Context.Provider>
    )

}
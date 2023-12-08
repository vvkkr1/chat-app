import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const[currUser,setCurrUser]=useState({});

    useEffect(()=>{
       const unSub = onAuthStateChanged(auth,(user)=>{
            setCurrUser(user);
            console.log("_______",user);
        })
        return () => {
            unSub();
        }
    },[]);

return(
    <AuthContext.Provider value={currUser}>
        {children}
    </AuthContext.Provider>
)
   
};
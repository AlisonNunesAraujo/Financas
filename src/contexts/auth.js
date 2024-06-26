import React, { createContext, useState } from "react";

export const AuthContext = createContext({})


function AuthProvider({children}){

    const [user, setUser] = useState({
        nome: 'Alison',
        cidade: 'MG'
    });

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

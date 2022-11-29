import React, { useState } from "react"

const AuthContext = React.createContext({
    tokenL : '',
    isLogdedIn: false,
    login: (token) =>{},
    logout: ()=>{},
})

export const AuthContextProvider = (props) =>{
    const [token, setToken] = useState();

    const userIsLoggdIn = !!token;

    const loginHandler = (token)=>{
        setToken(token);
    };

    const logoutHandler = (token)=>{
        setToken(null);
    };

    const contextvalue = {
        token: token,
        isLogdedIn: userIsLoggdIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={contextvalue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext
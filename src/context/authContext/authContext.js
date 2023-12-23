import React, { createContext } from 'react';

export const userContext = createContext()

const AuthContext = ({children}) => {
    const userInfo = {  }
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;
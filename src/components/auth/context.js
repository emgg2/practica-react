import React from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;


export const useAuthContext = () => {
    return React.useContext(AuthContext);    
}


export default AuthContext;
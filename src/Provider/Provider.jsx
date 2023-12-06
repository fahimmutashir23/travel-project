import { createContext, useState } from "react";


export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState()
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
import { createContext, useState } from "react";


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Provider = ({children}) => {
    const [user, setUser] = useState()
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
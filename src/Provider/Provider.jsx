import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUser = (email, password) => {
        setLoading()
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading()
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        setLoading()
        return signOut(auth)
    }

    const updateUser = (profile) => {
        setLoading();
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {user,loading, signUpUser, signInUser, logOutUser, updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
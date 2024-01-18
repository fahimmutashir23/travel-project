import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()

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

    const googleSignIn = () => {
        setLoading()
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () => {
        setLoading()
        return signOut(auth)
    }

    const updateUser = (profile) => {
        setLoading();
        return updateProfile(auth.currentUser, profile)
    }

    const resetPassword = (email) => {
        setLoading();
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {user, loading, signUpUser, signInUser, googleSignIn, logOutUser, updateUser, resetPassword}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();


    // register user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }



    // update user profile
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }


    // sign out user

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();

    }, [])


    const userInfo = {
        user,
        loading,
        error,
        setError,
        registerUser,
        userSignIn,
        signInWithGoogle,
        updateUserProfile,
        signOutUser,

    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
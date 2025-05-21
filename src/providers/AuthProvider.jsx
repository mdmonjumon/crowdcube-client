import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }




    const userInfo = {
        user,
        loading,
        registerUser

    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (currenUser, name, photo) => {
        return updateProfile(currenUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            console.log('OnAuthState Current User : ', currenUser);
            setLoading(false)
            setUser(currenUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])




    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        googleSignIn,
        githubSignIn,
        logOut,
        resetPassword,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // set user data......................
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // auth provider...................
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google Sign In user context..............................................
    const googleSignInHandler = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }
    // Github Sign In user context..............................................
    const githubSignInHandler = () => {
        setLoading(false);
        return signInWithPopup(auth, githubProvider);
    }
    //create user context..............................................
    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login user context..............................................
    const loginUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //log out user context..............................................
    const logOutUser = () => {
        setLoading(false);
        return signOut(auth)
    }
    //set user name context..............................................
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubcribe();
        }
    }, []);





    const AuthInfo = { user, googleSignInHandler, githubSignInHandler, createUser, loginUser, logOutUser, loading };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
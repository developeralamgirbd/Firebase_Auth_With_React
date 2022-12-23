import {createContext, useEffect, useState} from "react";
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut
   } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children})=>{
    const [currentUser, setCurrentUser]  = useState({});
const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    const signInWithFacebook = ()=>{
        return signInWithPopup(auth, facebookProvider);
    }

    const createUserWithEmailPassword = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUserEmailPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setCurrentUser(user);
            setLoading(false)
        });

        return unsubscribe;

    }, [])

    const value = {
        currentUser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        createUserWithEmailPassword,
        signInUserEmailPassword,
        logOut,
        loading};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;
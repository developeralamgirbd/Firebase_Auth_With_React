import {createContext, useContext, useEffect, useState} from "react";
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
import {login} from "../APIRequest/login";

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

    const createUserWithEmailPassword = async (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);


    }
    const signInUserEmailPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        return onAuthStateChanged(auth, async user=>{
            if (user){
              /*  user.getIdToken().then(token => {
                    login(token).then(result => {
                        console.log(result.data)
                        setCurrentUser(result?.data);
                        setLoading(false)
                    })
                })*/

                const token = await user.getIdToken();
                const result = await login(token);
                console.log(result.data);
                console.log('token=> ', token);
                setCurrentUser(result?.data);
                setLoading(false)
            }
            setLoading(false)

        });

    }, [])

    const value = {
        currentUser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        createUserWithEmailPassword,
        signInUserEmailPassword,
        logOut,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;
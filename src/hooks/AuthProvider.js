import React, {/*  useEffect, */ useState } from "react";
import firebaseConfig from '../services/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import firebase from "../services/firebase";

let AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    /*     useEffect(() => {
            const auth = getAuth(firebaseConfig);
            onAuthStateChanged(auth, (user) => {
                setUser(user)
            })
        }, []); */

    let signin = async (newUser, callback) => {
        const auth = getAuth(firebase);
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        //метод возвращает объект user или null
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
        callback();
    };

    let signout = async (callback) => {
        const auth = getAuth(firebaseConfig);
        await signOut(auth);
        setUser(null);
        callback();
    }

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
    return React.useContext(AuthContext);
};

export default useAuth;

AuthProvider.propTypes = {
    children: PropTypes.array,
};

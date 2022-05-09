import React, { useState } from "react";
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';

let AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    let signin = async (newUser, callback) => {
        await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
        //метод возвращает объект user или null
        await onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        callback();
    };

    let signout = async () => {
        await signOut(auth);
        setUser(null);
    };

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

import { onValue, set } from "firebase/database";
import { userNameRef, userShowNameRef } from "../../services/firebase";

export const TOGGLE_NAME = 'TOGGLE_NAME';
export const SET_NAME = 'SET_NAME';

export const toggleName = (value) => ({
    type: TOGGLE_NAME,
    payload: {
        value,
    },
});

export const setName = (name) => ({
    type: SET_NAME,
    payload: {
        name,
    },
});

export const initUserData = () => (dispatch) => {
    onValue(userNameRef, (snapshot) => {
        const userName = snapshot?.val();
        dispatch(setName(userName));
    });
    onValue(userShowNameRef, (snapshot) => {
        const userShowName = snapshot?.val();
        dispatch(setName(userShowName));
    });
};

export const setNameInDB = (newName) => () => {
    set(userNameRef, newName);
};

export const setShowNameInDB = (newValue) => () => {
    set(userShowNameRef, newValue);
};
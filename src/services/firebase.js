import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDXO18s1N2D-mnf0XIfBsVkurc6oSlwvSg",
    authDomain: "myapp-9a099.firebaseapp.com",
    databaseURL: "https://myapp-9a099-default-rtdb.firebaseio.com",
    projectId: "myapp-9a099",
    storageBucket: "myapp-9a099.appspot.com",
    messagingSenderId: "83923961479",
    appId: "1:83923961479:web:be44e005070b2420601a22"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;

export const auth = getAuth(firebase);
export const db = getDatabase(firebase);

export const userRef = ref(db, 'profile');
export const userNameRef = ref(db, 'profile/name');
export const userShowNameRef = ref(db, 'profile/name');
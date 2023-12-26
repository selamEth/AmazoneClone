
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCQ3_N418dkBMUUwM_WNYf-sRIhhLpASNI",
    authDomain: "clone--frontend.firebaseapp.com",
    projectId: "clone--frontend",
    storageBucket: "clone--frontend.appspot.com",
    messagingSenderId: "479794091519",
    appId: "1:479794091519:web:ead8f86e5c1db6a53343ca",
    measurementId: "G-MVKQRETXTQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export {auth, db};

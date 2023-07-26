// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// The apiKey in this configuration snippet just identifies your Firebase project on the Google servers.
// It is not a security risk for someone to know it. 
const firebaseConfig = {
    apiKey: "AIzaSyAgJ8Qd3pHBiW4cGohHRo8Vjb6bGk-U1eQ",
    authDomain: "sveltekit-template-firebase.firebaseapp.com",
    projectId: "sveltekit-template-firebase",
    storageBucket: "sveltekit-template-firebase.appspot.com",
    messagingSenderId: "357238260124",
    appId: "1:357238260124:web:b2477bec86d7b39f1c0859"
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
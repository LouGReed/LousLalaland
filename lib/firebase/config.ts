// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtwzoel4RnU6Q1bCIlDFFF9D_izvnTn-8",
  authDomain: "lou-s-lalaland.firebaseapp.com",
  projectId: "lou-s-lalaland",
  storageBucket: "lou-s-lalaland.firebasestorage.app",
  messagingSenderId: "850861567632",
  appId: "1:850861567632:web:38f74498129bbc9ee73215",
  measurementId: "G-1PWG1TKQE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
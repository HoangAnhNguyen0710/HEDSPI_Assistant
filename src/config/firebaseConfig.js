// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp_ZeyytILuESCPNYgLJ9_Cp924Ys-teQ",
  authDomain: "hedspi-web-backend.firebaseapp.com",
  projectId: "hedspi-web-backend",
  storageBucket: "hedspi-web-backend.appspot.com",
  messagingSenderId: "918802200605",
  appId: "1:918802200605:web:439b9b2bd29cd066246ef4",
  measurementId: "G-H2BN34CRYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
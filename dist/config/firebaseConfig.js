"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.analytics = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
var storage_1 = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBp_ZeyytILuESCPNYgLJ9_Cp924Ys-teQ",
    authDomain: "hedspi-web-backend.firebaseapp.com",
    projectId: "hedspi-web-backend",
    storageBucket: "hedspi-web-backend.appspot.com",
    messagingSenderId: "918802200605",
    appId: "1:918802200605:web:439b9b2bd29cd066246ef4",
    measurementId: "G-H2BN34CRYN",
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.analytics = (0, analytics_1.getAnalytics)(app);
exports.storage = (0, storage_1.getStorage)(app);

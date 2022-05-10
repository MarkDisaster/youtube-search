import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAitCIGtp3473FsbDd2XWdbML4GxuVoJmI",
  authDomain: "liltube.firebaseapp.com",
  projectId: "liltube",
  storageBucket: "liltube.appspot.com",
  messagingSenderId: "970841229665",
  appId: "1:970841229665:web:c9d6f2e3193df79b131d20",
  measurementId: "G-Y9M33S8C6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoU44Atu1MY1m7jRo9AjIp9tqYZj3xhSk",
  authDomain: "posrestro-29629.firebaseapp.com",
  projectId: "posrestro-29629",
  storageBucket: "posrestro-29629.appspot.com",
  messagingSenderId: "313272675112",
  appId: "1:313272675112:web:9668ff53441a7bb5d77e1d",
  measurementId: "G-96684CE8D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
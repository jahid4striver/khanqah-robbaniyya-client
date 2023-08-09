// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBawoNF3WEyrBJ0b4hS3jecoioTtqqrJ6k",
  authDomain: "madrasha-e-jalaluddin-rumi.firebaseapp.com",
  projectId: "madrasha-e-jalaluddin-rumi",
  storageBucket: "madrasha-e-jalaluddin-rumi.appspot.com",
  messagingSenderId: "109625582497",
  appId: "1:109625582497:web:9d7c789a88d099a779a1e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;
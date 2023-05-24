// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfrD4QIvSBLzrSN0GydA2SlAvHo4y-Zyk",
  authDomain: "drinkly-b2ace.firebaseapp.com",
  projectId: "drinkly-b2ace",
  storageBucket: "drinkly-b2ace.appspot.com",
  messagingSenderId: "574164753990",
  appId: "1:574164753990:web:81ce7b858c306282387447",
  measurementId: "G-XZ9X52SC6C"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_FIREBASE_APIKEY,
  authDomain: "pininterest-35094.firebaseapp.com",
  projectId: "pininterest-35094",
  storageBucket: "pininterest-35094.appspot.com",
  messagingSenderId: "108221981642",
  appId: "1:108221981642:web:11c09e77ae78b7b436a533",
  measurementId: "G-6B8PZERW0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
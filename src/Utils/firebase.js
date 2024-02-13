// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC92QwlyAV8Dl0VYiOcsXLjMxk_kolVkhM",
  authDomain: "netflixgpt-4419c.firebaseapp.com",
  projectId: "netflixgpt-4419c",
  storageBucket: "netflixgpt-4419c.appspot.com",
  messagingSenderId: "876129764494",
  appId: "1:876129764494:web:985e26b096849dac4835df",
  measurementId: "G-WJR67TB0Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
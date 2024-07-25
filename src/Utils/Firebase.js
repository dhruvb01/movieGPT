// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkagjWgC9dstbIfh5mYtYq6NUJcC2sdy0",
  authDomain: "netflixgpt-70ead.firebaseapp.com",
  projectId: "netflixgpt-70ead",
  storageBucket: "netflixgpt-70ead.appspot.com",
  messagingSenderId: "1093887696937",
  appId: "1:1093887696937:web:1ee9ea0754bc438f9dfc38",
  measurementId: "G-RSSB27KVWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

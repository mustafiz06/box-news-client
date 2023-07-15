// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ImIvC3Pi5KUNIadL31WWiV7u7nKsS_U",
  authDomain: "dragon-news-32e3d.firebaseapp.com",
  projectId: "dragon-news-32e3d",
  storageBucket: "dragon-news-32e3d.appspot.com",
  messagingSenderId: "312781265974",
  appId: "1:312781265974:web:c550bb2f9057947a094c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
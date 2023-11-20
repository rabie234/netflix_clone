// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvS8D-ExReUhdhWMLtgQxMDT_uQnpPY4",
  authDomain: "netflix-clone-1be5f.firebaseapp.com",
  projectId: "netflix-clone-1be5f",
  storageBucket: "netflix-clone-1be5f.appspot.com",
  messagingSenderId: "1031862762993",
  appId: "1:1031862762993:web:e4319ecdf05f687c1e1850"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
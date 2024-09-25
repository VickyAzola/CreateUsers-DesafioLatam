// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhhAvd8bHHWMsyheSNzf51gI6RdahEJuU",
  authDomain: "crear-usuarios-4131d.firebaseapp.com",
  projectId: "crear-usuarios-4131d",
  storageBucket: "crear-usuarios-4131d.appspot.com",
  messagingSenderId: "146301337000",
  appId: "1:146301337000:web:e848777d66a725a4b1719d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app)

export { $db }
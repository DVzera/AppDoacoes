import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWQkANAtO6GYhPAHGuqNWjT78F6ZPJo5o",
    authDomain: "appdoacao-ac251.firebaseapp.com",
    projectId: "appdoacao-ac251",
    storageBucket: "appdoacao-ac251.appspot.com",
    messagingSenderId: "1049317465995",
    appId: "1:1049317465995:web:e2ba4b52926d65a6ad998e"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { database, collection, doc, deleteDoc, addDoc, auth, onAuthStateChanged };
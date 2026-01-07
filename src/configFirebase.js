// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRVJRVfBgSgR4HO2-k7OBh8eRiIwZ9alA",
    authDomain: "crud-books-fsj32.firebaseapp.com",
    projectId: "crud-books-fsj32",
    storageBucket: "crud-books-fsj32.firebasestorage.app",
    messagingSenderId: "384508813688",
    appId: "1:384508813688:web:bbdb5959e0af80b826688d"
};

//Inicializamos el proyecto de firebase
const app = initializeApp(firebaseConfig);
//utilizando la base de datos que creamos en el proyecto de firebase
const dbStore = getFirestore(app)

export { dbStore }

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAT1yTr7jgbwU8ddpAjSi3u8aFJ1kvHTI4",
    authDomain: "gofundme-test.firebaseapp.com",
    projectId: "gofundme-test",
    storageBucket: "gofundme-test.appspot.com",
    messagingSenderId: "509824153964",
    appId: "1:509824153964:web:fc23039c05b9b8355fdb49"
  });

const db = getFirestore();

export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkAcHs_QRK4OXea_KPJbvyO-iD_15cxms",
  authDomain: "realtor-clone-react-38ed5.firebaseapp.com",
  projectId: "realtor-clone-react-38ed5",
  storageBucket: "realtor-clone-react-38ed5.appspot.com",
  messagingSenderId: "39585195166",
  appId: "1:39585195166:web:6c0eb4dacac2ec22c4478f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
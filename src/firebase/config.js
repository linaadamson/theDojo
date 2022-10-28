import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADCOxswiu4NuH2ySgip_ibKy7Hdcr_F08",
  authDomain: "thedojo-28a3a.firebaseapp.com",
  projectId: "thedojo-28a3a",
  storageBucket: "thedojo-28a3a.appspot.com",
  messagingSenderId: "186789366050",
  appId: "1:186789366050:web:e52b09201d6e493daffd7b",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// Timestamp

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdfv3c97HFV-CTmXoKMjhgPQm6wAntFuY",
  authDomain: "amaliyot-8e518.firebaseapp.com",
  projectId: "amaliyot-8e518",
  storageBucket: "amaliyot-8e518.appspot.com",
  messagingSenderId: "28966848905",
  appId: "1:28966848905:web:daac16ed9e5e62dcadb958",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };

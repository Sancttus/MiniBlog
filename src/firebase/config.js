import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA71tveU3e4M4HUZvpT4462PN_owNBw_YA",
  authDomain: "mini-blog-2df73.firebaseapp.com",
  projectId: "mini-blog-2df73",
  storageBucket: "mini-blog-2df73.appspot.com",
  messagingSenderId: "937766495875",
  appId: "1:937766495875:web:fb4113c2692a799349ddb6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

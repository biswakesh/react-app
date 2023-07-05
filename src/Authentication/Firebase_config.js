import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider} from "firebase/auth"
// import { getDatabase } from "firebase/database"
import{getFirestore,addDoc,collection}from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyChzpHBnmhZNWMESwSGO1gmLarSEF3HP7E",
  authDomain: "webchat1-5ff81.firebaseapp.com",
  projectId: "webchat1-5ff81",
  storageBucket: "webchat1-5ff81.appspot.com",
  messagingSenderId: "1020014083683",
  appId: "1:1020014083683:web:39281ebc81432a4c7f0256",
  measurementId: "G-BK58EQ6J8T"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
export{auth,provider,collection};


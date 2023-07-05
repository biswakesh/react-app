import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,GoogleAuthProvider} from "firebase/auth"
// import { getDatabase } from "firebase/database"
import{getFirestore,addDoc,collection}from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCJgkioYRB68fopHSQKAvdGLn381VSLHYM",
  authDomain: "angularcrud-6be69.firebaseapp.com",
  databaseURL: "https://angularcrud-6be69-default-rtdb.firebaseio.com",
  projectId: "angularcrud-6be69",
  storageBucket: "angularcrud-6be69.appspot.com",
  messagingSenderId: "535243672600",
  appId: "1:535243672600:web:c40188e462143f6225076d"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
export{auth,provider,collection};


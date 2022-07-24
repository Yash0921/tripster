
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBRPSFQlpRhhQWiS_n83kRoelf78X-jDpo",
  authDomain: "newproject-cda1e.firebaseapp.com",
  projectId: "newproject-cda1e",
  storageBucket: "newproject-cda1e.appspot.com",
  messagingSenderId: "686021386623",
  appId: "1:686021386623:web:eac2afa15af2e345473a4a",
  measurementId: "G-417G98L1BL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();
const Facebookprovider = new FacebookAuthProvider();
export { auth, Googleprovider,Facebookprovider };

export default db;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsxVLnOV9YE_4lw8Y9Fd9DO-tjyV8B7x8",
  authDomain: "lodha-bellevues.firebaseapp.com",
  projectId: "lodha-bellevues",
  storageBucket: "lodha-bellevues.appspot.com",
  messagingSenderId: "348712451718",
  appId: "1:348712451718:web:ca49cc0103b5bae863db07",
  measurementId: "G-VVP1TH5PJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };

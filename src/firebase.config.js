import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMES5AG6PFhMpGx6VtDW13Dn_IKpyqtcI",
  authDomain: "the-home-genies.firebaseapp.com",
  projectId: "the-home-genies",
  storageBucket: "the-home-genies.appspot.com",
  messagingSenderId: "722812872697",
  appId: "1:722812872697:web:8af07e346ad373a751ff28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
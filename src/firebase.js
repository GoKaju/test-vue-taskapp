import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyCi7fPMnzlf40u0lrkho0jBlZSTdwm54_E",
  authDomain: "meteorologyapp.firebaseapp.com",
  databaseURL: "https://meteorologyapp.firebaseio.com",
  projectId: "meteorologyapp",
  storageBucket: "meteorologyapp.appspot.com",
  messagingSenderId: "589485436047"
});

export const db = firebaseApp.firestore();
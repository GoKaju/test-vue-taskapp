import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyCi7fPMnzlf40u0lrkho0jBlZSTdwm54_E",
  authDomain: "meteorologyapp.firebaseapp.com",
  databaseURL: "https://meteorologyapp.firebaseio.com",
  projectId: "meteorologyapp",
  storageBucket: "meteorologyapp.appspot.com",
  messagingSenderId: "589485436047"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore();
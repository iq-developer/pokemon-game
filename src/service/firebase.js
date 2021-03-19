import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAX-4jZsbPIkJB4nu4UP9ihtNqrNbV1aIM",
  authDomain: "pokemon-game-515c0.firebaseapp.com",
  databaseURL: "https://pokemon-game-515c0-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-515c0",
  storageBucket: "pokemon-game-515c0.appspot.com",
  messagingSenderId: "219057016519",
  appId: "1:219057016519:web:7cc93bfd2b15dc7390f8e2"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;

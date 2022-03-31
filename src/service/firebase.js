import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDg_8LWEBlzI7gE6uQHL4kNIL-pPQga_q8",
  authDomain: "pokemon-game1-9882b.firebaseapp.com",
  databaseURL: "https://pokemon-game1-9882b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game1-9882b",
  storageBucket: "pokemon-game1-9882b.appspot.com",
  messagingSenderId: "38316478032",
  appId: "1:38316478032:web:4d60d94f91c88cf5e80b55"
};


firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
  }

  removePokemon = (key, cb) => {
    this.database.ref(`pokemons/${key}`).set(null).then(() => cb());
  }
}

export default Firebase;

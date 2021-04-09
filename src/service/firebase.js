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
}

export default Firebase;

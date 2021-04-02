import s from "./style.module.css";
import {useState, useEffect} from 'react';
import PokemonCard from "../../PokemonCard";
import pokemons from "../../data.json"
import database from '../../service/firebase';

const GamePage = () => {

  const [allPokemons, setAllPokemons] = useState({});

  const getPokemons = () => {
    database.ref('pokemons').once('value', (snapshot) => {
      setAllPokemons(snapshot.val());
    });
  }

  useEffect(() => {
    getPokemons();
  }, []);

  // разворот карточки
  const changeActive = (id) => {
    setAllPokemons(prevState => { // перезаписывает всех покемонов, добавля isActive в открытую карту
      return Object.entries(prevState).reduce((acc, item) => {
          const objID = item[0];
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
            pokemon.isActive = !pokemon.isActive;
            database.ref('pokemons/'+ objID).set(pokemon);
          };

          acc[item[0]] = pokemon;

          return acc;
      }, {});
    });
  }

  // добавление покемона попытка через цикл - покемоны удваиваются
  // const addNewPokemon = () => {
  //   Object.entries(allPokemons).map(([key, value]) => {
  //     if (value.id === 17) { // id определенного покемона
  //       const pokemonToDb = {...value};
  //       console.log('#pokemonToDb: ', pokemonToDb);
  //       const newKey = database.ref().child('pokemons').push().key;
  //       database.ref('pokemons/' + newKey).set(pokemonToDb).then(() => getPokemons());
  //       //setAllPokemons({...allPokemons, newKey: pokemonToDb});
  //     }
  //   });
  // }

  const data = {
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
      "top": "A",
      "right": 2,
      "bottom": 7,
      "left": 5
    }
  };

  const addNewPokemon = () => {
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data).then(() => getPokemons());
  }

  return (
      <>
      <button className={s.center} onClick={addNewPokemon}>Add new pokemon</button>
      <div className={s.flex}>
          {
            Object.entries(allPokemons).map(([key, value]) => <PokemonCard
              key={value.id}
              id={value.id}
              name={value.name}
              type={value.type}
              values={value.values}
              img={value.img}
              isActive={value.isActive}
              handleActive={changeActive}
            />)
          }
      </div>
      </>
  )
}

export default GamePage;

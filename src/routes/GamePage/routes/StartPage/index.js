import s from "./style.module.css";
import {useState, useEffect, useContext} from 'react';
import PokemonCard from "../../../../PokemonCard";
import database from '../../../../service/firebase';
import { FirebaseContext } from "../../../../context/firebaseContext";

const Game = () => {
  const firebase = useContext(FirebaseContext);
  const [allPokemons, setAllPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setAllPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  // разворот карточки
  const changeActive = (id) => {
    setAllPokemons(prevState => { // перезаписывает всех покемонов, добавля isActive в открытую карту
      return Object.entries(prevState).reduce((acc, item) => {
          const objID = item[0];
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
            pokemon.isActive = !pokemon.isActive;
            // database.ref('pokemons/'+ objID).set(pokemon);
          };

          acc[item[0]] = pokemon;

          firebase.postPokemon(item[0], pokemon);

          return acc;
      }, {});
    });
  }

  const DATA = {
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

  const handleAddPokemon = () => {
    const data = DATA;
    firebase.addPokemon(data);
  }

  return (
      <>
      <button className={s.center} onClick={handleAddPokemon}>Add new pokemon</button>
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

export default Game;

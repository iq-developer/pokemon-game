import s from "./style.module.css";
import {useState, useEffect} from 'react';
import PokemonCard from "../../PokemonCard";
import pokemons from "../../data.json"
import database from '../../service/firebase';

const GamePage = ({onChangePage}) => {

  const [allPokemons, setAllPokemons] = useState({});

  const addNewPokemon = () => {
    Object.entries(allPokemons).map(([key, value]) => {
      if (value.id === 17) { // id определенного покемона
        const pokemonToDb = {...value};
        console.log('#pokemonToDb: ', pokemonToDb);
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(pokemonToDb);
      }
    });
  }

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setAllPokemons(snapshot.val());
    });
  }, []);

  // разворот карточки
  const changeActive = (id) => {
    setAllPokemons(prevState => { // перезаписывает всех покемонов, добавля isActive в открытую карту
      return Object.entries(prevState).reduce((acc, item) => {
          const objID = item[0];
          console.log('objID: ', objID);
          const pokemon = {...item[1]};
          console.log('pokemon: ', pokemon);
          if (pokemon.id === id) {
            pokemon.isActive = true;
            database.ref('pokemons/'+ objID).set(pokemon);
          };

          acc[item[0]] = pokemon;

          return acc;
      }, {});
    });
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

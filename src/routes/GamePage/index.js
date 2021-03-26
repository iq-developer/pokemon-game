import s from "./style.module.css";
import {useState, useEffect} from 'react';
import PokemonCard from "../../PokemonCard";
import pokemons from "../../data.json"
import database from '../../service/firebase';

const GamePage = ({onChangePage}) => {

  const [allPokemons, setAllPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setAllPokemons(snapshot.val());
      console.log('####: snapshot', snapshot.val());
    });
  }, []);



  const changeActive = (id) => {

    // setAllPokemons(allPokemons.map((item, index) => {
    //   if (item.id === id) {
    //     item.isActive = !item.isActive;
    //   } else {
    //     item.isActive = false;
    //   }
    //   return item;
    // }));

    setAllPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
              pokemon.isActive = true;
          };

          acc[item[0]] = pokemon;

          return acc;
      }, {});
    });

  }

  return (
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
  )
}

export default GamePage;

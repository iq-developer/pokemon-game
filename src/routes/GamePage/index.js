import s from "./style.module.css";

import {useState} from 'react';

import PokemonCard from "../../PokemonCard";

import pokemons from "../../data.json"

const GamePage = ({onChangePage}) => {

  const [allPokemons, setAllPokemons] = useState(pokemons);

  const changeActive = (id) => {
    console.log('before:', allPokemons);
    setAllPokemons(allPokemons.map((item, index) => {
      if (item.id === id) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
      return item;
    }));
    console.log('after:', allPokemons);
  }

  return (
      <div className={s.flex}>
          {
            allPokemons.map(item => <PokemonCard
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
              values={item.values}
              img={item.img}
              isActive={item.isActive}
              handleActive={changeActive}
            />)
          }
      </div>
  )
}

export default GamePage;

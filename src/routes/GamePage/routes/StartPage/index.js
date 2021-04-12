import s from "./style.module.css";
import {useState, useEffect, useContext} from 'react';
import PokemonCard from "../../../../PokemonCard";
import database from '../../../../service/firebase';
import { FirebaseContext } from "../../../../context/firebaseContext";

const Game = () => {
  const firebase = useContext(FirebaseContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  // разворот карточки
  const handleChangeSelected = (key) => {
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  }



  return (
      <>
      <div className={s.buttonWrap}>
        <button>Start Game</button>
      </div>
      <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, value]) => <PokemonCard
              className={s.card}
              key={value.id}
              id={value.id}
              name={value.name}
              type={value.type}
              values={value.values}
              img={value.img}
              isActive={true}
              isSelected={value.selected}
              handleActive={() => handleChangeSelected(key)}
            />)
          }
      </div>
      </>
  )
}

export default Game;

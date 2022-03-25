import s from "./style.module.css";
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../PokemonCard";
import { FirebaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

const Game = () => {
  const firebase = useContext(FirebaseContext);
  const pokemonsContext = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState({});
  const history = useHistory();

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonsContext.onSelectedPokemons(key, pokemon);
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  }

  const handleStartGameClick = () => {
    history.push('/game/board');
  }


  return (
    <>
      <div className={s.buttonWrap}>
        <button
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}
        >Start Game</button>
      </div>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => <PokemonCard
            className={s.card}
            key={id}
            id={id}
            name={name}
            type={type}
            values={values}
            img={img}
            isActive={true}
            isSelected={selected}
            onClickCard={() => {
              if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                handleChangeSelected(key);
              }
            }}
          />)
        }
      </div>
    </>
  )
}

export default Game;

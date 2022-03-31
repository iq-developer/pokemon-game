import s from './style.module.css';
import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import PokemonCard from './../../../../PokemonCard';
import { PokemonContext } from "../../../../context/pokemonContext";

const FinishPage = (result) => {
  const { pokemons, player2Pokemons, gameResult, } = useContext(PokemonContext);
  const history = useHistory();
  const resultData = {
    win: {
      title: 'You win',
      desc: 'Take one pokemon from player2',
      cards: player2Pokemons,
    },
    loose: {
      title: 'You loose',
      desc: 'Player2 takes one pokemon',
      cards: pokemons,
    },
    draw: {
      title: 'Draw',
      desc: 'Nobody wins any pokemons',
      cards: {},
    },
    error: {
      title: 'Error',
      desc: 'Please start new game',
      cards: {},
    },
  }
  const [resultPokemons, setResultPokemons] = useState(resultData[gameResult].cards);

  const handleRemoveSelected = (key) => {

    setResultPokemons(prevState => {
      const newState = { ...prevState };
      newState[key].isRemoved = true;
      return newState;
    });

    // database update

    // setTimeout(() => history.push('/game'), 1000);
  }

  return (
    <>
      <div className={s.buttonWrap}>
        <div className={s.message}>
          <p className={s.title}>{resultData[gameResult].title}</p>
          <h1>{resultData[gameResult].desc}</h1>
        </div>
      </div>
      <div className={s.flex}>
        {
          Object.entries(resultPokemons).map(([key, { name, img, id, type, values, selected, isRemoved }]) => <PokemonCard
            className={s.card}
            key={id}
            id={id}
            name={name}
            type={type}
            values={values}
            img={img}
            isActive={true}
            isSelected={selected}
            isRemoved={isRemoved}
            onClickCard={() => {
              if (resultData[gameResult].title === 'win') {
                handleRemoveSelected(key);
              }
            }}

          />)
        }
      </div>
    </>
  )
};

export default FinishPage;

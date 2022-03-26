import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../PokemonCard';
import s from './style.module.css';

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const { pokemons } = useContext(PokemonContext);
  const history = useHistory();
  console.log('board: ', board);
  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardRequest = await boardResponse.json();
    setBoard(boardRequest.data);

  }, []);

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game');
  }

  const handleClickBoardPlate = (position) => {
    console.log('position: ', position);

  }


  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {
          Object.values(pokemons).map(({ name, img, id, type, values }) => (
            <PokemonCard
              className={s.card}
              key={id}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              minimize
              isActive
            />
          ))
        }
      </div>
      <div className={s.board}>
        {
          board.map((item) => (
            <div
              className={s.boardPlate}
              key={item.position}
              onClick={() => !item.card && handleClickBoardPlate(item.position)}
            >
              {
                item.card && <PokemonCard {...item} minimize />
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BoardPage;

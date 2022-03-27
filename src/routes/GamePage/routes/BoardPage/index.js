import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../PokemonCard';
import PlayerBoard from './components/PlayerBoard';
import s from './style.module.css';

const BoardPage = () => {
  const { pokemons } = useContext(PokemonContext);
  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState(() => {
    return Object.values(pokemons).map(item => ({
      ...item,
      posession: 'blue',
    }))
  });
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiseCard] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardRequest = await boardResponse.json();
    setBoard(boardRequest.data);

    const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    const player2Request = await player2Response.json();

    setPlayer2(() => {
      return player2Request.data.map(item => ({
        ...item,
        posession: 'red',
      }))
    });

  }, []);

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game');
  }

  const handleClickBoardPlate = async (position) => {
    console.log('position: ', position);
    console.log('choiceCard: ', choiceCard);

    if (choiceCard) {
      const params = {
        position,
        card: choiceCard,
        board,
      }

      const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const request = await res.json();
      console.log('request: ', request);

      setBoard(request.data);
    }
  }


  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        <PlayerBoard
          player={1}
          cards={player1}
          onClickCard={(card) => setChoiseCard(card)}
        />
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
                item.card && <PokemonCard {...item.card} isActive minimize />
              }
            </div>
          ))
        }
      </div>

      <div className={s.playerTwo}>
        <PlayerBoard
          player={2}
          cards={player2}
          onClickCard={(card) => setChoiseCard(card)}
        />
      </div>

    </div>
  );
};

export default BoardPage;

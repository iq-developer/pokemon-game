import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../PokemonCard';
import PlayerBoard from './components/PlayerBoard';
import s from './style.module.css';

const counterWin = (board, player1, player2) => {
  let player1Count = player1.length;
  let player2Count = player2.length;

  board.forEach(item => {
    if (item.card.possession === 'red') {
      player2Count++;
    }
    if (item.card.possession === 'blue') {
      player1Count++;
    }
  });

  return [player1Count, player2Count];
}

/*
player1, player2 - left and right cards stacks
pokemonsContext.pokemons - selected pokemons
pokemons - all my pokemons, include selected (from context)
*/

const BoardPage = () => {
  const { pokemons, setGameResult, setPlayer2Pokemons } = useContext(PokemonContext);
  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState(() => {
    return Object.values(pokemons).map(item => ({
      ...item,
      possession: 'blue',
    }))
  });
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiseCard] = useState(null);
  const [steps, setSteps] = useState(0);
  const history = useHistory();

  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardRequest = await boardResponse.json();
    setBoard(boardRequest.data);

    const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    const player2Request = await player2Response.json();

    setPlayer2Pokemons(player2Request.data);

    setPlayer2(() => {
      return player2Request.data.map(item => ({
        ...item,
        possession: 'red',
      }))
    });

  }, []);

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game');
  }

  const handleClickBoardPlate = async (position) => {

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
      setBoard(request.data);

      if (choiceCard.player === 1) {
        setPlayer1(prevState => prevState.filter((item) => item.id !== choiceCard.id));
      }

      if (choiceCard.player === 2) {
        setPlayer2(prevState => prevState.filter((item) => item.id !== choiceCard.id));
      }

      setBoard(request.data);

      setSteps(prevState => ++prevState);

    }
  }

  useEffect(() => {
    if (steps === 9) {
      const [count1, count2] = counterWin(board, player1, player2);

      if (count1 > count2) {
        setGameResult('win');
      } else if (count1 < count2) {
        setGameResult('loose');
      } else {
        setGameResult('draw');
      }
      history.replace('/game/finish');
    }
  }, [steps, board, player1, player2]);


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

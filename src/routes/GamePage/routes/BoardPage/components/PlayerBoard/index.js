import PokemonCard from "../../../../../../PokemonCard";
import s from './style.module.css';
import cn from 'classnames';
import { useState } from 'react';

const PlayerBoard = ({ cards, onClickCard, player }) => {
  const [isSelected, setSelected] = useState(null);

  const isPlayer2 = player === 2;

  return (
    <>
      {
        cards.map((item) => (
          <div
            className={cn(s.cardBoard, {
              [s.selected]: isSelected === item.id,
              [s.player2]: isPlayer2,
            })}
            onClick={() => {
              setSelected(item.id);
              onClickCard && onClickCard({
                player,
                ...item,
              });
            }}
          >
            <PokemonCard
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
              values={item.values}
              img={item.img}
              minimize
              isActive
              isPlayer2={isPlayer2}
            />
          </div>
        ))
      }
    </>
  )

}

export default PlayerBoard;

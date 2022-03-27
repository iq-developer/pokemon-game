import PokemonCard from "../../../../../../PokemonCard";
import s from './style.module.css';
import cn from 'classnames';
import { useState } from 'react';

const PlayerBoard = ({ cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);

  return (
    <>
      {
        cards.map((item) => (
      <div
        className={cn(s.cardBoard, {
          [s.selected]: isSelected === item.id
        })}
        onClick={() => {
          setSelected(item.id);
          onClickCard && onClickCard(item);
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
        />
      </div>
      ))
      }
    </>
  )

}

export default PlayerBoard;

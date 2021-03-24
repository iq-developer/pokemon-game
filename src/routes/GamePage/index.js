import s from "./style.module.css";

import PokemonCard from "../../PokemonCard";

import pokemons from "../../data.json"


const GamePage = ({onChangePage}) => {

  const handleClick = () => {
    console.log('####: <Game Page />');
    onChangePage && onChangePage('app');
  }

  return (
    <div>
      <h1>This is Game Page!!!</h1>
      <button onClick={handleClick}>Start game</button>

      <div className={s.flex}>
          {
            pokemons.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} type={item.type} values={item.values} img={item.img} />)
          }
      </div>
    </div>
  )
}

export default GamePage;

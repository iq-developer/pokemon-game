import s from "./style.module.css";
import {useState, useEffect} from 'react';
import PokemonCard from "../../PokemonCard";
import pokemons from "../../data.json"
import database from '../../service/firebase';

const GamePage = ({onChangePage}) => {

  const [allPokemons, setAllPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setAllPokemons(snapshot.val());
      console.log('####: snapshot', snapshot.val());
    });
  }, []);

  // // objID - это тот самый непонятный ключ у нашего объекта.
  // database.ref('pokemons/'+ objID).set({
  // 	// Один item покемона
  // });


  // разворот карточки
  const changeActive = (id) => {

    // TODO: переписать через prevStat

    //перезаписывает всех покемонов, добавля isActive в открытую карту
    console.log('allPokemons0', allPokemons);
    setAllPokemons(Object.entries(allPokemons).map(([key, value]) => {
      if (value.id === id) {
        value.isActive = true; // без обратного поворота
        database.ref('pokemons/'+ key).set(value); // отправляем обновленного покемона в базу данных
        console.log('key', key);
        console.log('value', value);
      } else {
        value.isActive = false;
      }
      return value;
    }));
    console.log('allPokemons1', allPokemons);

    // для переворачивания карточек рабочий код Зака
    // setAllPokemons(prevState => {
    //   return Object.entries(prevState).reduce((acc, item) => {
    //       //const objID = {...item[0]};
    //       //console.log(objID);
    //       const pokemon = {...item[1]};
    //       if (pokemon.id === id) {
    //         pokemon.isActive = true;
    //         // database.ref('pokemons/'+ objID).set(pokemon);
    //       };

    //       acc[item[0]] = pokemon;

    //       return acc;
    //   }, {});
    // });

  }

  return (
      <div className={s.flex}>
          {
            Object.entries(allPokemons).map(([key, value]) => <PokemonCard
              key={value.id}
              id={value.id}
              name={value.name}
              type={value.type}
              values={value.values}
              img={value.img}
              isActive={value.isActive}
              handleActive={changeActive}
            />)
          }
      </div>
  )
}

export default GamePage;

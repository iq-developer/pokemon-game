import "./../../index.css";
import "./style.module.css";

import Header from "./../../components/Header";
import Layout from "./../../components/Layout";
import Footer from "./../../components/Footer";
import PokemonCard from "./../../PokemonCard";
import MenuHeader from "./../../components/MenuHeader";

import bg1 from "./../../assets/bg1.jpg";
import bg3 from "./../../assets/bg3.jpg";

import pokemons from "./../../data.json"

//console.log(pokemons);

const HomePage = ({onChangePage}) => {

  const handleClickButton = (page) => {
    console.log('####: <HomePage />');
    onChangePage && onChangePage(page);
  }


  return (
    <>
      {/* <MenuHeader /> */}
      <Header
        title='Pokemon Game'
        descr='short description of the game'
        onClickButton={handleClickButton}
      />
      <Layout
        title='Layout1 title'
        urlBg={bg1}
      >
      <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.<br />
      Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
      </Layout>
      <Layout
        title='Layout2 title'
        colorBg='#e2e2e2'
      >
        <div className='flex'>
          {
            pokemons.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} type={item.type} values={item.values} img={item.img} />)
          }
        </div>
      </Layout>
      <Layout
        title='Layout3 title'
        descr='Layout3 description'
        urlBg={bg3}
      />
      <Footer />
    </>
  );
};

export default HomePage;

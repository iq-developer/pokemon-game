import "./../../index.css";
import s from "./style.module.css";

import Header from "../../components/Header";
import Layout from "../../components/Layout";

const HomePage = ({ onChangePage }) => {

  const handleClickButton = (page) => {
    onChangePage && onChangePage(page);
  }

  return (
    <>

      <Header
        title='Pokemons'
        descr='Triple triad card game'
        onClickButton={handleClickButton}
      />
      <Layout
        title='Game rules'
        colorBg='#181d23'
      >
        <p>In the game two players face off against one another, one side playing as "yellow", the other as "red" on a 3x3 grid.<br />
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or yellow.</p>

        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.</p>

        <p>To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.</p>

        <p>If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.</p>

        <p>If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>

        <p>If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>

        <p> The game ends, when all playground is occupied by cards (9 cards used)</p>

        <p>Player, who have more card's at the end of the round wins.</p>

        <p>Winner select and take one card from the opponent's stack</p>
      </Layout>

    </>
  );
};

export default HomePage;

<h1 align="center">Triple triad card game on React.js</h1>

<h4 align="center">Developed as educational project at <a href='https://reactmarathon.com/' target='_blank'>Zar React Marathon</a></h4>

<p align="center">
<a href="https://github.com/iq-developer/pokemon-game/commits/main">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/iq-developer/pokemon-game">
</a>
<a href="https://reactjs.org/">
<img alt="GitHub last commit" src="https://img.shields.io/badge/React-17.0.1-blue">
</a>
<a href="https://reactjs.org/">
<img alt="GitHub last commit" src="https://img.shields.io/badge/Firebase-8.3.1-yellow">
</a>
<a href="https://www.linkedin.com/in/iq-developer/">
<img alt="GitHub last commit" src="https://img.shields.io/badge/made by-iq&#8211;developer-orange">
</a>  
</p>

## Demo
### [View live demo](https://iq-developer.github.io/pokemon-game/)

## Screenshot
![Poks](https://user-images.githubusercontent.com/70282845/161306423-f49d97f4-25ca-4e43-8a6b-49f5301f0f58.jpg)

## Game rules
* In the game two players face off against one another, one side playing as "yellow", the other as "red" on a 3x3 grid.
* Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or yellow.
* To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
* To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
* If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
* If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
* If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
* The game ends, when all playground is occupied by cards (9 cards used)
* Player, who have more card's at the end of the round wins.
* Winner select and take one card from the opponent's stack

## Build with
* [Create React App](https://github.com/facebook/create-react-app)
* [Firebase](https://firebase.google.com/)
* [Classnames](https://www.npmjs.com/package/classnames)

### Used react hooks and components
* useState
* useEffect
* useLocation
* useHistory
* useContext
* useRouteMatch
* Route
* Switch
* Redirect

### Installation
  ```sh
  git clone git@github.com:iq-developer/pokemon-game.git
  cd pokemon-game
  npm install
  npm start
  ```
This will open [http://localhost:3000](http://localhost:3000) in your browser.    
### License
For demonstration purposes only

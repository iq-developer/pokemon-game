const GamePage = ({onChangePage}) => {

  const handleClick = () => {
    console.log('####: <Game Page />');
    onChangePage && onChangePage('app');
  }

  return (
    <div>
      <h1>This is Game Page!!!</h1>
      <button onClick={handleClick}>Start game</button>
    </div>
  )
}

export default GamePage;

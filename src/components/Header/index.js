import style from './style.module.css';

const Header = ({title, descr, onClickButton}) => {
  const handleClick = () => {
    console.log('####: <Header />');
    onClickButton && onClickButton('game');
  }

  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.silhouette}></div>
      <div className={style.moon}></div>
      <div className={style.container}>
          <h1>{title}</h1>
          <p>{descr}</p>

          <button onClick={handleClick}>Start game</button>
      </div>
    </header>
  );
};

export default Header;

import s from "./style.module.css";
const AboutPage = () => {

  return (
    <div className={s.about}>
      <h1>Poks - triple triad card game on React.js</h1>
      <p>This game developed for educational purposes at <a href='https://reactmarathon.com/' target='_blank'>Zar React Marathon</a></p>
      <p>Pokemons names, charachteristics and images are property of their respective owners.</p>
      <p>In this project all content received by public API, and used for example purposes only.</p>
    </div>
  )
}

export default AboutPage;

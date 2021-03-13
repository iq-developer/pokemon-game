import style from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
  const bg = urlBg ? {background: `url(${urlBg}) ${colorBg}`} : {background: `${colorBg}`};

  return (
    <section className={style.root} style={bg}>
      <div className={style.wrapper}>
        <article>
            <div className={style.title}>
                <h3>{title}</h3>
                <span className={style.separator}></span>
            </div>
            <div className={style.desc + ' ' + style.full}>
                <p>{descr}</p>
            </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;

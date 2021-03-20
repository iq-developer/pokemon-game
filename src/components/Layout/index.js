import style from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg, children}) => {
  
  const bgStyle = {};

  if (urlBg){
    bgStyle.backgroundImage = `url(${urlBg})`;
  }
  if (urlBg){
    bgStyle.backgroundColor = '#e2e2e2';
  }

  return (
    <section
      className={style.root}
      style={bgStyle}
    >
      <div className={style.wrapper}>
        <article>
            <div className={style.title}>
                <h3>{title}</h3>
                <span className={style.separator}></span>
            </div>
            <div className={style.desc + ' ' + style.full}>
                <p>{descr}</p>
                {children}
            </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;

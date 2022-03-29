import s from './style.module.css';

const Layout = ({ title, descr, urlBg, colorBg, children }) => {

  const bgStyle = {};

  if (urlBg) {
    bgStyle.backgroundImage = `url(${urlBg})`;
  }
  if (colorBg) {
    bgStyle.backgroundColor = colorBg;
  }

  return (
    <section
      className={s.root}
      style={bgStyle}
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3 className={s.whiteTitle}>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={s.desc + ' ' + s.full}>
            <p>{descr}</p>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;

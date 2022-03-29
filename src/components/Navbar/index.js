import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({isOpen, bgActive = false, onClickHamburg}) => {
  return (
    <nav className={cn(s.root, {
      [s.bgActive]: bgActive
    })}>
      <div className={s.navWrapper} onClick={onClickHamburg}>
        <p className={s.brand}>
          Pokemons
        </p>
        <div className={cn(s.menuButton, {
          [s.active]: isOpen
          })}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

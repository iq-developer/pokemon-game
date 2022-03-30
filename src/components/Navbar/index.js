import s from './style.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, bgActive = false, onClickHamburg }) => {

  return (
    <nav className={cn(s.root, {
      [s.bgActive]: bgActive
    })}>
      <div className={s.navWrapper} >
        <p>
          <Link to={'/'}>
            <span className={s.brand}>
              Pokemons
            </span>
          </Link>
        </p>
        <div
          onClick={onClickHamburg}
          className={cn(s.menuButton, {
            [s.active]: isOpen
          })}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

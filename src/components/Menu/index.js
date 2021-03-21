import s from './style.module.css';
import cn from 'classnames';

const MENU = [
  {
    title: 'HOME',
    to: '/',
  },
  {
    title: 'GAME',
    to: 'game',
  },
  {
    title: 'ABOUT',
    to: 'about',
  },
  {
    title: 'CONTACT',
    to: 'contact',
  },
  
]



const Menu = ({isOpen}) => {
  return (
    <div className={cn(s.menuContainer, {
      [s.active]: isOpen === true,
      [s.deactive]: isOpen === false,
    })}>
      <div className={s.overlay} />
      
      <div className={s.menuItems}>
        <ul>
          {
            MENU.map((item, index) => (            
              <li key={index}>
                <a href={item.to}>
                  {item.title}
                </a>
              </li>              
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default Menu;

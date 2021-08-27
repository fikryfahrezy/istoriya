import { useState } from 'react';
import style from './Nav.module.css';
import Sublink from './sublink';
import components from './components';

type NavProps = {
  isActive: boolean;
};

const Nav = ({ isActive }: NavProps) => {
  const [linkActive] = useState(0);

  return (
    <nav className={`${style.nav} ${isActive ? style.navActive : ''}`}>
      <nav className={style.navContent}>
        <div className={style.currentPageNameShadow}>gallery</div>
        <ul className={style.navList}>
          {components.map(({ id, isSubLink, link, title, sublink }, i) => (
            <li
              key={id}
              className={`${style.navListItem} ${
                i === linkActive ? style.activeList : ''
              }`}
            >
              <Sublink
                isSublink={isSubLink}
                link={link}
                title={title}
                sublink={sublink}
              />
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;

import { useState } from 'react';
import style from './Nav.module.css';
import Sublink from './sublink';

const data = [
  {
    id: '1',
    isSubLink: true,
    link: '/',
    title: 'work',
    sublink: [
      {
        id: '1',
        link: '/',
        title: 'slider centered image',
      },
      {
        id: '2',
        link: '/',
        title: 'slider centered image',
      },
      {
        id: '3',
        link: '/',
        title: 'slider bottom title',
      },
      {
        id: '4',
        link: '/',
        title: 'slice revealer',
      },
      {
        id: '5',
        link: '/work/masonry',
        title: 'masonry version',
      },
    ],
  },
  {
    id: '2',
    isSubLink: false,
    link: '/',
    title: 'studio',
    sublink: [],
  },
  {
    id: '3',
    isSubLink: false,
    link: '/',
    title: 'news',
    sublink: [],
  },
  {
    id: '4',
    isSubLink: false,
    link: '/',
    title: 'contact',
    sublink: [],
  },
];

type NavProps = {
  isActive: boolean;
};

const Nav = ({ isActive }: NavProps) => {
  const [linkActive] = useState(0);

  return (
    <nav className={`${style.nav} ${isActive ? style.navActive : ''}`}>
      <nav className={style.navContent}>
        <div className={style.currentPageNameShadow}>work</div>
        <ul className={style.navList}>
          {data.map(({ id, isSubLink, link, title, sublink }, i) => (
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

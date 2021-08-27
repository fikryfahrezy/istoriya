import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import style from './Sublink.module.css';

type SublinkProps = {
  isSublink: boolean;
  link: string;
  title: string;
  sublink: { id: string; link: string; title: string }[];
};

const Sublink = ({ isSublink, link, title, sublink }: SublinkProps) => {
  const [linkActive] = useState(0);
  const [isCollapse, setCollapse] = useState(true);
  const subLinkCont = useRef<HTMLUListElement>(null);

  const collapseBtn = function collapseBtn() {
    setCollapse(!isCollapse);
  };

  useEffect(() => {
    if (subLinkCont.current) {
      subLinkCont.current.classList.add(style.firstRender);
      if (
        subLinkCont.current.style.height === '' &&
        subLinkCont.current.clientHeight > 0
      ) {
        subLinkCont.current.style.height = `${subLinkCont.current.clientHeight}px`;
        subLinkCont.current.classList.remove(style.firstRender);
      }
    }
  }, []);

  return (
    <>
      {isSublink ? (
        <button
          className={`hover-target ${style.navBtn}`}
          onClick={collapseBtn}
        >
          {title}
        </button>
      ) : (
        <Link href={link}>
          <a className={`hover-target ${style.navAnchor}`}>{title}</a>
        </Link>
      )}
      {isSublink && (
        <ul
          className={`${style.subLink} ${isCollapse ? style.collapse : ''}`}
          ref={subLinkCont}
        >
          {sublink.map(({ id, title, link }, i) => (
            <li
              key={id}
              className={`${style.subLinkList} ${
                i === linkActive ? style.activeSubList : ''
              }`}
            >
              <Link href={link}>
                <a className={`hover-target ${style.subLinkAnchor}`}>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sublink;

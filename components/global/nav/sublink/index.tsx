import { useState } from 'react';
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

  return (
    <>
      {isSublink ? (
        <a className={`hover-target ${style.navAnchor}`}>{title}</a>
      ) : (
        <Link href={link}>
          <a className={`hover-target ${style.navAnchor}`}>{title}</a>
        </Link>
      )}
      {isSublink && (
        <ul className={style.subLink}>
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

import type { MouseEvent, ReactNode } from 'react';
import { useEffect, useRef, useContext, useState } from 'react';
import { CusrorContext } from '../../context/Cursor';
import Header from './header';
import Nav from './nav';
import Socials from './socials';
import Copyright from './copyright';
import Cursor from './cursor';
import cursorStyle from './cursor/Cursor.module.css';
import style from './Global.module.css';

type GlobalProps = {
  children: ReactNode;
};

const Global = ({ children }: GlobalProps) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const { cursorRef } = useContext(CusrorContext);
  const header = useRef<HTMLElement>(null);
  const isMounted = useRef(false);
  const lastScrTop = useRef(0);

  const toggleNav = function toggleNav() {
    setNavOpen(!isNavOpen);
  };

  const mouseMove = function mouseMove(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) {
    const target = e.target as HTMLElement;

    if (cursorRef?.current) {
      cursorRef.current.style.left = '0';
      cursorRef.current.style.top = '0';
      cursorRef.current.style.transform = `
        translate(${e.clientX + 100}px, ${e.clientY}px)
        `;

      const cursorTwo = cursorRef.current.querySelector('.cursor-two');
      const cursorThree = cursorRef.current.querySelector('.cursor-three');

      if (target.classList.contains('hover-target')) {
        cursorTwo?.classList.add(style.cursorHover);
        cursorThree?.classList.add(style.cursorHoverBg);
      } else {
        cursorTwo?.classList.remove(style.cursorHover);
        cursorThree?.classList.remove(style.cursorHoverBg);
      }

      if (target.classList.contains('video-target')) {
        cursorTwo?.classList.add(cursorStyle.cursorGone);
        cursorThree?.classList.add(cursorStyle.cursorGone);
      } else {
        cursorTwo?.classList.remove(cursorStyle.cursorGone);
        cursorThree?.classList.remove(cursorStyle.cursorGone);
      }
    }
  };

  const trackScroll = function trackScroll() {
    if (isMounted.current) {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

      if (header.current) {
        if (scrolled > header.current.offsetHeight)
          header.current.classList.add(style.headerFix);
        else header.current.classList.remove(style.headerFix);

        /**
         * Ref: Detecting scroll direction
         * https://stackoverflow.com/questions/31223341/detecting-scroll-direction
         */
        // downscroll code
        if (scrolled > lastScrTop.current)
          header.current.classList.remove(style.headerVisible);
        // upscroll code
        else header.current.classList.add(style.headerVisible);
      }

      lastScrTop.current = scrolled <= 0 ? 0 : scrolled; // For Mobile or negative scrolling
    }
  };

  useEffect(() => {
    isMounted.current = true;

    // NOTE: Window object in React
    // https://stackoverflow.com/questions/37081803/how-do-i-use-the-window-object-in-reactjs
    window.addEventListener('scroll', trackScroll);

    return () => {
      isMounted.current = false;
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  return (
    <div className={style.overHide} onMouseMove={mouseMove}>
      <div className={style.animsition}>
        <Header ref={header} toggleNav={toggleNav} isActive={isNavOpen} />
        <Nav isActive={isNavOpen} />
        {children}
        <Socials />
        <Copyright />
        <Cursor ref={cursorRef} />
      </div>
    </div>
  );
};

export default Global;

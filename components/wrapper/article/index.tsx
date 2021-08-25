import 'animate.css/animate.min.css';
import type { ReactNode } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState, useRef } from 'react';
import style from './Article.module.css';

type ArticleWrapperProps = {
  children: ReactNode;
};

const ArticleWrapper = ({ children }: ArticleWrapperProps) => {
  const [isArrowActive, setArrowActive] = useState(false);
  const isMounted = useRef(false);
  const background = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);

  const trackScroll = function trackScroll() {
    if (isMounted.current) {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        setArrowActive(true);
      } else if (scrolled < coords) {
        setArrowActive(false);
      }

      if (background.current) {
        background.current.style.transform = `translateY(${scrolled / -2}px)`;
      }

      if (header.current) {
        header.current.style.transform = `translateY(${scrolled / 2}px)`;
        header.current.style.opacity = `${1 - scrolled / 300}`;
      }
    }
  };

  const backToTop = () => {
    if (isMounted.current)
      if (window.pageYOffset > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
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
    <>
      <div className={style.background} ref={background}>
        The Battle
      </div>
      <div className={style.headerContainer}>
        <div className={style.innerHeaderContainer}>
          <div className={style.pageHeader} ref={header}>
            <div className={style.titleContainer}>
              <h1 className={style.pageTitle}>The Battle</h1>
            </div>
            <div className={style.titleHighlight}>
              <p className={style.highlightText}>fashion, photography</p>
            </div>
          </div>
        </div>
      </div>
      <main className={style.mainContainer}>{children}</main>
      <footer className={style.footerContainer}>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          offset={0}
          className={style.footerBg}
        >
          LEtoile Feb
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={500}
        >
          <div className={style.pageContainer}>
            <div className={style.footerLink}>
              <div className={style.footerText}>
                <div className={style.footerLines}>
                  <a href="#" className={style.footerAnchor}>
                    <h4 className={`hover-target ${style.footerTitle}`}>
                      Next Project
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </footer>
      <button
        onClick={backToTop}
        className={`hover-target ${style.arrowUp} ${
          isArrowActive ? style.arrowUpActive : ''
        }`}
      ></button>
    </>
  );
};

export default ArticleWrapper;

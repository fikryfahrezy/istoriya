import 'swiper/swiper.min.css';
import type { MouseEvent } from 'react';
import { useContext, useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper/core';
import { CusrorContext } from '../../context/Cursor';
import style from './Home.module.css';

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

const data = [
  {
    id: '1',
    link: '/blog',
    title: 'awal mula',
  },
  {
    id: '2',
    link: '/blog',
    title: '1590',
  },
  {
    id: '3',
    link: '/blog',
    title: '27 Juni 1596',
  },
  {
    id: '4',
    link: '/blog',
    title: 'sejak ABAD 16',
  },
  {
    id: '5',
    link: '/blog',
    title: '20 Maret 1602',
  },
  {
    id: '6',
    link: '/blog',
    title: '17 Maret 1798',
  },
  {
    id: '7',
    link: '/blog',
    title: '1811',
  },
  {
    id: '8',
    link: '/blog',
    title: '1816',
  },
  {
    id: '9',
    link: '/blog',
    title: 'ABAD 18',
  },
  {
    id: '10',
    link: '/blog',
    title: '1830-1870',
  },
  {
    id: '11',
    link: '/blog',
    title: '1905-1908',
  },
  {
    id: '12',
    link: '/blog',
    title: '28 Okt 1928',
  },
  {
    id: '13',
    link: '/blog',
    title: '8 Maret 1942',
  },
  {
    id: '14',
    link: '/blog',
    title: '1 Maret 1945',
  },
  {
    id: '15',
    link: '/blog',
    title: 'Agustus 1945',
  },
  {
    id: '16',
    link: '/blog',
    title: '16 Agustus 1916',
  },
  {
    id: '17',
    link: '/blog',
    title: '17 Agustus 1945',
  },
];

const Home = () => {
  const { cursorRef, isMobile } = useContext(CusrorContext);
  const [sliderIndex, setSliderIndex] = useState(-1);
  const [isStarted, setStarted] = useState(false);
  const sliderScrollbar = useRef<HTMLDivElement>(null);
  const audioElement = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setSliderIndex(0);
  }, []);

  useEffect(() => {
    if (isStarted && audioElement.current) {
      audioElement.current.play();
      audioElement.current.volume = 0.1;
    }
  }, [isStarted]);

  const toggleCursor = function toggleCursor(
    isOn: boolean,
    target: HTMLElement,
  ) {
    if (cursorRef?.current) {
      if (isOn) {
        target.classList.add(style.cursorIcon);
        cursorRef.current.style.opacity = '0';
      } else {
        target.classList.remove(style.cursorIcon);
        cursorRef.current.style.opacity = '1';
      }
    }
  };

  const mouseDown = function mouseDown(
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) {
    toggleCursor(true, e.target as HTMLElement);
  };

  const mouseUpOut = function mouseUpOut(
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) {
    toggleCursor(false, e.target as HTMLElement);
  };

  const changeCurrSlider = function changeCurrSlider(index: number) {
    setSliderIndex(index);
  };

  const startPage = function startPage() {
    setStarted(true);
  };

  return (
    <>
      <main
        className={`${style.sliderContainer} ${
          isStarted ? '' : style.hideScreen
        }`}
        onMouseDown={mouseDown}
        onMouseUp={mouseUpOut}
        onMouseOut={mouseUpOut}
      >
        {isStarted && (
          <Swiper
            autoplay={false}
            breakpoints={{
              1200: {
                freeMode: false,
              },
            }}
            freeMode={true}
            grabCursor={true}
            mousewheel={true}
            resistance={true}
            resistanceRatio={0}
            speed={800}
            scrollbar={{
              el: sliderScrollbar.current,
              hide: false,
              draggable: true,
              dragSize: 19,
            }}
            slidesPerView="auto"
            touchStartPreventDefault={false}
            className={`${style.sliderWrapper} ${style.sliderSlide} ${style.sliderFreeMode}`}
          >
            {data.map(({ id, link, title }, i) => (
              <SwiperSlide
                key={id}
                className={`${style.sliderList} ${
                  i === sliderIndex ? style.sliderActive : ''
                }`}
                onMouseEnter={() => {
                  !isMobile && changeCurrSlider(i);
                }}
                onTouchStart={() => changeCurrSlider(i)}
              >
                <Link href={link}>
                  <a className={style.sliderAnchor}>
                    <h1 className={`hover-target ${style.sliderTitle}`}>
                      {title}
                    </h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div ref={sliderScrollbar} className={style.sliderScrollbar}>
          <button
            className={`swiper-scrollbar-drag ${style.sliderScrollbarBtn}`}
          ></button>
        </div>
      </main>
      <div className={`${isStarted ? '' : style.hideScreen}`}>
        <div className={style.bgImg}>
          <video width="1920" autoPlay muted className={style.videoBg}>
            <source
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/video/upload/v1629899323/istoriya/video/videoplayback_booads.webm`}
              type="video/webm"
            />
            <source
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/video/upload/v1629899319/istoriya/video/videoplayback_grqrau.mp4`}
              type="video/mp4"
            />
            Sorry, your browser doesnt support embedded videos.
          </video>
        </div>
        <ul className={style.bgPage}>
          {data.map(({ id, title }, i) => (
            <li
              key={id}
              className={`${style.bgList} ${
                i === sliderIndex ? style.show : ''
              }`}
            >
              <h2 className={style.bgTitle}>{title}</h2>
              <div className={style.bgCurrNum}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className={style.bgMaxNum}>
                {String(data.length).padStart(2, '0')}
              </div>
            </li>
          ))}
        </ul>
        <audio ref={audioElement} loop={true}>
          <source
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/video/upload/v1629901603/istoriya/audio/audioplayback_zk5vx0.webm`}
            type="audio/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/video/upload/v1629901605/istoriya/audio/audioplayback_khuujf.mp3`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div
        className={`${style.landingContainer} ${
          isStarted ? style.hideScreen : ''
        }`}
      >
        <Image
          src="/img/started.jpg"
          layout="fill"
          alt="Started Image"
          className={style.startImg}
        />
        <div className={style.landingWrapper}>
          <button
            className={`hover-target ${style.startBtn}`}
            onClick={startPage}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

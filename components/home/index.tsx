import Link from 'next/link';
import type { MouseEvent } from 'react';
import { useContext, useEffect, useReducer, useRef } from 'react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { CusrorContext } from '../../context/Cursor';
import components from '../../data/home.json';
import style from './Home.module.css';

type ACTIONTYPE =
  | {
      type: 'RENDER';
      payload: {
        sliderIndex: number;
        isRendered: boolean;
      };
    }
  | {
      type: 'START';
      payload: {
        isStart: boolean;
        isWithMusic: boolean;
        isWithVideo: boolean;
      };
    }
  | { type: 'SETINDEX'; payload: number }
  | { type: 'SETDRAWER'; payload: boolean }
  | { type: 'SETMUSIC'; payload: boolean }
  | { type: 'SETVIDEO'; payload: boolean };

const initialState = {
  sliderIndex: -1,
  isStarted: false,
  isWithVideo: false,
  isWithMusic: false,
  isRendered: false,
  isDrawerOpen: false,
};

const reducer: (
  state: typeof initialState,
  action: ACTIONTYPE,
) => typeof initialState = function reducer(state, action) {
  switch (action.type) {
    case 'RENDER':
      return {
        ...state,
        isRendered: action.payload.isRendered,
        sliderIndex: action.payload.sliderIndex,
      };
    case 'START':
      return {
        ...state,
        isStarted: action.payload.isStart,
        isWithMusic: action.payload.isWithMusic,
        isWithVideo: action.payload.isWithVideo,
      };
    case 'SETINDEX':
      return { ...state, sliderIndex: action.payload };
    case 'SETDRAWER':
      return { ...state, isDrawerOpen: action.payload };
    case 'SETVIDEO':
      return { ...state, isWithVideo: action.payload };
    case 'SETMUSIC':
      return { ...state, isWithMusic: action.payload };
    default:
      return state;
  }
};

// install Swiper modules
SwiperCore.use([Mousewheel, Scrollbar]);

const Home = () => {
  const [
    {
      sliderIndex,
      isRendered,
      isStarted,
      isWithMusic,
      isWithVideo,
      isDrawerOpen,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { cursorRef, isMobile } = useContext(CusrorContext);
  const sliderScrollbar = useRef<HTMLDivElement>(null);
  const audioElement = useRef<HTMLAudioElement>(null);
  const drawer = useRef<HTMLDivElement>(null);
  const drawerOption = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isRendered = Boolean(window.localStorage.getItem('isRendered'));

    dispatch({ type: 'RENDER', payload: { isRendered, sliderIndex: 0 } });
  }, []);

  useEffect(() => {
    if ((isStarted || isRendered) && audioElement.current)
      if (isWithMusic) {
        audioElement.current.play();
        audioElement.current.volume = 0.1;
      } else if (!isWithMusic) {
        audioElement.current.pause();
      }

    if (drawer.current && drawerOption.current)
      drawer.current.style.transform = `translateY(${drawerOption.current.clientHeight}px)`;
  }, [isStarted, isRendered, isWithMusic]);

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
    dispatch({ type: 'SETINDEX', payload: index });
  };

  const startPage = function startPage(withMedia: boolean) {
    dispatch({
      type: 'START',
      payload: {
        isWithMusic: withMedia,
        isWithVideo: withMedia,
        isStart: true,
      },
    });
  };

  const toggleDrawer = function toggleDrawer() {
    dispatch({ type: 'SETDRAWER', payload: !isDrawerOpen });
  };

  const toggleVideo = function toggleVideo() {
    dispatch({ type: 'SETVIDEO', payload: !isWithVideo });
  };

  const toggleMusic = function toggleMusic() {
    dispatch({ type: 'SETMUSIC', payload: !isWithMusic });
  };

  return (
    <>
      <main
        className={`${isStarted || isRendered ? '' : style.hideScreen}`}
        onMouseDown={mouseDown}
        onMouseUp={mouseUpOut}
        onMouseOut={mouseUpOut}
      >
        <div className={style.sliderContainer}>
          {(isStarted || isRendered) && (
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
              {components.map(({ id, link, title }, i) => (
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
        </div>
        <div className={`${style.bgContainer}`}>
          {isWithVideo && (
            <div
              style={{ opacity: '0.2' }}
              className={`${style.bgImg} ${style.bgVideo}`}
            >
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
          )}
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
          <ul className={style.bgPage}>
            {components.map(({ id, title, img }, i) => (
              <li
                key={id}
                className={`${style.bgList} ${
                  i === sliderIndex ? style.show : ''
                }`}
              >
                <div
                  style={{
                    display: isWithVideo ? 'none' : 'block',
                    backgroundImage: `url(${img})`,
                  }}
                  className={style.bgImg}
                ></div>
                <h2 className={style.bgTitle}>{title}</h2>
                <div className={style.bgCurrNum}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={style.bgMaxNum}>
                  {String(components.length).padStart(2, '0')}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${style.drawer}  ${isDrawerOpen ? style.show : ''}`}
          ref={drawer}
        >
          <div className={style.drawerBtnContainer}>
            <button
              className={`hover-target ${style.btnDrawer}`}
              onClick={toggleDrawer}
            ></button>
          </div>
          <div className={style.optionBtnWrapper} ref={drawerOption}>
            <button
              className={`hover-target ${style.optionBtn} ${
                isWithVideo ? style.show : ''
              }`}
              onClick={toggleVideo}
            >
              Play Video
            </button>
            <button
              className={`hover-target ${style.optionBtn} ${
                isWithMusic ? style.show : ''
              }`}
              onClick={toggleMusic}
            >
              Play Music
            </button>
          </div>
        </div>
      </main>
      <div
        className={`${style.landingContainer} ${
          !isStarted && !isRendered ? '' : style.hideScreen
        }`}
      >
        <div className={style.bgImg}></div>
        <h2 className={style.bgTitle}>starting</h2>
        <div className={style.landingWrapper}>
          <button
            className={`hover-target ${style.startBtn}`}
            onClick={() => startPage(true)}
          >
            With Media
          </button>
          <button
            className={`hover-target ${style.startBtn}`}
            onClick={() => startPage(false)}
          >
            No Media
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

import Image from 'next/image';
import MidArticleWrapper from '../wrapper/article/mid';
import FullimgWrapper from '../wrapper/fullimg';
import FullparagraphWrapper from '../wrapper/fullparagraph';
import FullvideoWrapper from '../wrapper/fullvideo';
import style from './Projectone.module.css';

const ProjectOne = () => {
  return (
    <MidArticleWrapper>
      <div className={style.halfImgContainer}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/3.jpg"
            width="532"
            height="798"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <div className={`${style.halfImgContainer} ${style.halfImgRight}`}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/3.jpg"
            width="532"
            height="798"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <FullparagraphWrapper />
      <FullvideoWrapper
        src="/img/1.jpg"
        width="1094"
        height="615"
        layout="responsive"
        alt="Video Thumbnail"
      />
      <span style={{ marginTop: '3rem', width: '100%' }}></span>
      <div className={style.halfImgContainer}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/4.jpg"
            width="532"
            height="798"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <div className={`${style.halfImgContainer} ${style.halfImgRight}`}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/4.jpg"
            width="532"
            height="798"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <div className={style.horizonList}>
        <div className={style.listItem}>
          <h5 className={style.listTitle}>art direction</h5>
          <p className={style.listText}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
        <div className={style.listItem}>
          <h5 className={style.listTitle}>art direction</h5>
          <p className={style.listText}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
        <div className={style.listItem}>
          <h5 className={style.listTitle}>art direction</h5>
          <p className={style.listText}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
      </div>
      <div className={style.halfImgContainer}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/1.jpg"
            width="532"
            height="355"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <div className={`${style.halfImgContainer} ${style.halfImgRight}`}>
        <div className={style.imgWrapper}>
          <Image
            src="/img/1.jpg"
            width="532"
            height="355"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
      <FullparagraphWrapper />
      <FullimgWrapper
        src="/img/4.jpg"
        width="1094"
        height="1641"
        layout="responsive"
        alt="Big Image"
      />
    </MidArticleWrapper>
  );
};

export default ProjectOne;

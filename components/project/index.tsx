import Image from 'next/image';
import ArticleWrapper from '../wrapper/article';
import FullimgWrapper from '../wrapper/fullimg';
import FullparagraphWrapper from '../wrapper/fullparagraph';
import style from './Project.module.css';

const Project = () => {
  return (
    <ArticleWrapper>
      <div className={style.pageContainer}>
        <div className={style.innerPageContainer}>
          <FullimgWrapper
            src="/img/1.jpg"
            width="1094"
            height="575"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
          <FullparagraphWrapper />
        </div>
      </div>
      <div className={style.containerFluid}>
        <div className={style.innerContainerFluid}>
          <div className={style.listContainer}>
            <div className={style.innerListContainer}>
              <div className={style.firstList}>
                <h5 className={style.listTitle}>art direction</h5>
                <p className={style.listParagraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia.
                </p>
              </div>
              <div className={style.secondList}>
                <h5 className={style.listTitle}>art direction</h5>
                <p className={style.listParagraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia.
                </p>
              </div>
              <div className={style.thirdList}>
                <h5 className={style.listTitle}>art direction</h5>
                <p className={style.listParagraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia.
                </p>
              </div>
              <div className={style.thirdList}>
                <h5 className={style.listTitle}>art direction</h5>
                <p className={style.listParagraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia.
                </p>
              </div>
            </div>
          </div>
          <div className={style.sideImage}>
            <div className={style.imgWrapper}>
              <Image
                src="/img/3.jpg"
                width="945"
                height="1019"
                layout="responsive"
                alt="Side Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.border}></div>
      <div className={style.pageContainer}>
        <div className={style.innerPageContainer}>
          <div className={style.halfImgContainer}>
            <div className={style.imgWrapper}>
              <Image
                src="/img/1.jpg"
                width="532"
                height="346"
                layout="responsive"
                alt="Bottom Image"
              />
            </div>
          </div>
          <div className={`${style.halfImgContainer} ${style.halfImgRight}`}>
            <div className={style.imgWrapper}>
              <Image
                src="/img/1.jpg"
                width="532"
                height="346"
                layout="responsive"
                alt="Bottom Image"
              />
            </div>
          </div>
          <FullparagraphWrapper />
          <FullimgWrapper
            src="/img/2.jpg"
            width="1094"
            height="1048"
            layout="responsive"
            alt="Page Image"
            className={style.pageImage}
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default Project;

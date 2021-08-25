import Image from 'next/image';
import Masonry from 'react-masonry-component';
import ArticleWrapper from '../../wrapper/article';
import style from './Masonry.module.css';

const Studio = () => {
  return (
    <ArticleWrapper>
      <div className={style.pageContainer}>
        <div className={style.innerPageContainer}>
          <div className={style.topContainer}>
            <div className={style.filterContainer}>
              <ul className={style.filterList}>
                <li className={style.filterItem}>
                  <button
                    className={`hover-target ${style.filterBtn} ${style.currentFilterBtn}`}
                  >
                    all
                  </button>
                </li>
                <li className={style.filterItem}>
                  <button className={`hover-target ${style.filterBtn}`}>
                    all
                  </button>
                </li>
                <li className={style.filterItem}>
                  <button className={`hover-target ${style.filterBtn}`}>
                    all
                  </button>
                </li>
                <li className={style.filterItem}>
                  <button className={`hover-target ${style.filterBtn}`}>
                    all
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Masonry>
              <div className={style.masonryItem}>
                <Image
                  src="/img/2.jpg"
                  width="523"
                  height="653"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/2.jpg"
                  width="523"
                  height="523"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/2.jpg"
                  width="523"
                  height="642"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/1.jpg"
                  width="523"
                  height="361"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/1.jpg"
                  width="523"
                  height="348"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/2.jpg"
                  width="523"
                  height="579"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/2.jpg"
                  width="523"
                  height="677"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
              <div className={style.masonryItem}>
                <Image
                  src="/img/1.jpg"
                  width="523"
                  height="294"
                  alt="Gallery Image"
                  className={style.masonryImg}
                />
                <div className={`hover-target ${style.masonryMask}`}></div>
                <p className={style.masonryText}>fashion</p>
                <h4 className={style.masonryTitle}>The Battle</h4>
              </div>
            </Masonry>
          </div>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default Studio;

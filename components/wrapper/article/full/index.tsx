import type { CSSProperties, ReactNode } from 'react';
import ArticleWrapper from '..';
import style from './Fullarticle.module.css';

type FullArticleWrapperProps = {
  styleProp?: CSSProperties;
  children: ReactNode;
};

const FullArticleWrapper = ({
  styleProp,
  children,
}: FullArticleWrapperProps) => {
  return (
    <ArticleWrapper>
      <main className={style.mainContainer} style={styleProp}>
        {children}
      </main>
    </ArticleWrapper>
  );
};

export default FullArticleWrapper;

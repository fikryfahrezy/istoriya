import type { CSSProperties, ReactNode } from 'react';
import ArticleWrapper from '..';
import style from './Fullarticle.module.css';

type FullArticleWrapperProps = {
  title: string;
  hightlight: string;
  styleProp?: CSSProperties;
  children: ReactNode;
};

const FullArticleWrapper = ({
  title,
  hightlight,
  styleProp,
  children,
}: FullArticleWrapperProps) => {
  return (
    <ArticleWrapper title={title} highlight={hightlight}>
      <main className={style.mainContainer} style={styleProp}>
        {children}
      </main>
    </ArticleWrapper>
  );
};

export default FullArticleWrapper;

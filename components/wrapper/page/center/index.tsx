import type { ReactNode } from 'react';
import style from './Center.module.css';
import FullArticleWrapper from '../full';

type MidArticleWrapperProps = {
  title: string;
  highlight: string;
  children: ReactNode;
};

const MidArticleWrapper = ({
  title,
  highlight,
  children,
}: MidArticleWrapperProps) => {
  return (
    <FullArticleWrapper title={title} hightlight={highlight}>
      <div className={style.pageContainer}>
        <div className={style.innerPageContainer}>{children}</div>
      </div>
    </FullArticleWrapper>
  );
};

export default MidArticleWrapper;

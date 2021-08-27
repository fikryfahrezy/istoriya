import type { ReactNode } from 'react';
import style from './Midarticle.module.css';
import FullArticleWrapper from '../full';

type MidArticleWrapperProps = {
  children: ReactNode;
};

const MidArticleWrapper = ({ children }: MidArticleWrapperProps) => {
  return (
    <FullArticleWrapper>
      <div className={style.pageContainer}>
        <div className={style.innerPageContainer}>{children}</div>
      </div>
    </FullArticleWrapper>
  );
};

export default MidArticleWrapper;

import type { ImageProps } from 'next/image';
import Img from '../img';
import style from './Halfimg.module.css';

type HalfimgWrapperProps = {
  leftImg: ImageProps;
  rightImg: ImageProps;
};

const HalfimgWrapper = ({ leftImg, rightImg }: HalfimgWrapperProps) => {
  return (
    <div className={style.halfImgContainer}>
      <Img {...leftImg} position="NONE" />
      <Img {...rightImg} position="NONE" />
    </div>
  );
};

export default HalfimgWrapper;

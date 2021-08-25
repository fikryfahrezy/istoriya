import 'animate.css/animate.min.css';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import style from './Fullimg.module.css';

const FullimgWrapper = ({ alt, ...props }: ImageProps) => {
  return (
    <div className={style.fullMediaContainer}>
      <div className={style.imgWrapper}>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
          <Image {...props} alt={alt} />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default FullimgWrapper;

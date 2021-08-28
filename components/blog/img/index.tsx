import 'animate.css/animate.min.css';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import style from './Img.module.css';

export type Position = 'CENTER' | 'LEFT' | 'RIGHT' | 'NONE';

export type BlogImgProps = {
  position?: Position;
  description?: string;
} & ImageProps;

const BlogImg = ({
  position = 'CENTER',
  description,
  alt,
  ...props
}: BlogImgProps) => {
  const positionStyle = (() => {
    switch (position) {
      case 'LEFT':
        return style.leftPosition;
      case 'RIGHT':
        return style.rightPosition;
      case 'CENTER':
        return style.centerPosition;
      default:
        return '';
    }
  })();

  return (
    <div
      className={`${style.imgContainer} ${positionStyle}`}
      style={{ width: props.width ?? '100%' }}
    >
      <div className={style.imgWrapper}>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
          <Image {...props} alt={alt} />
          {description && <p>{description}</p>}
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default BlogImg;

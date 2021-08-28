import type { Position } from './img';
import CenterPageWrapper from '../wrapper/page/center';
import HalfimgWrapper from './halfimg';
import Img from './img';
import ImgPragraph from './imgparagraph';
import Singleparagraph from './singleparagraph';
import Subtitle from './subtitle';

export type BlogType = {
  id: string;
  title: string;
  highlight: string;
  components: {
    id: string;
    type: string;
    subtitle: { text: string } | null;
    paragraph: { text: string } | null;
    img: {
      src: string;
      width: string;
      height: string;
      alt: string;
      description: string;
    } | null;
    halfimg: {
      rightimg: {
        src: string;
        width: string;
        height: string;
        alt: string;
        position: string;
        description: string;
      };
      leftimg: {
        src: string;
        width: string;
        height: string;
        alt: string;
        position: string;
        description: string;
      };
    } | null;
    imgparagraph: {
      img: {
        src: string;
        width: string;
        height: string;
        alt: string;
        position?: Position;
        description: string;
      };
      paragraph: {
        text: string;
      };
    } | null;
  }[];
};

type BlogProps = {
  data: BlogType;
};

const Blog = ({ data }: BlogProps) => {
  const { title, highlight, components } = data;

  return (
    <CenterPageWrapper title={title} highlight={highlight}>
      {components.map(
        ({ id, type, subtitle, paragraph, img, halfimg, imgparagraph }) => {
          if (type === 'SUBTITLE' && subtitle)
            return <Subtitle key={id} text={subtitle.text} />;
          else if (type === 'PARAGRAPH' && paragraph)
            return <Singleparagraph key={id} text={paragraph.text} />;
          else if (type === 'IMG' && img) return <Img key={id} {...img} />;
          else if (type === 'IMGPARAGRAPH' && imgparagraph) {
            return <ImgPragraph key={id} {...imgparagraph} />;
          } else if (type === 'HALFIMG' && halfimg)
            return (
              <HalfimgWrapper
                key={id}
                leftImg={halfimg.leftimg}
                rightImg={halfimg.rightimg}
              />
            );
        },
      )}
    </CenterPageWrapper>
  );
};

export default Blog;

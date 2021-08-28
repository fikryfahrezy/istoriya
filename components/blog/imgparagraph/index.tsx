import type { BlogImgProps } from '../img';
import type { ParagraphProps } from '../paragraph';
import Img from '../img';
import Paragraph from '../paragraph';

type ImgParagraph = { img: BlogImgProps; paragraph: ParagraphProps };

const ImgPragraph = ({ img, paragraph }: ImgParagraph) => {
  return (
    <div style={{ clear: 'both' }}>
      <Img {...img} />
      <Paragraph text={paragraph.text} />
    </div>
  );
};

export default ImgPragraph;

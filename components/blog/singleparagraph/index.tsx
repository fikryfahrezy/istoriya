import type { ParagraphProps } from '../paragraph';
import Paragraph from '../paragraph';

const SingleParagraph = ({ text }: ParagraphProps) => {
  return (
    <div style={{ clear: 'both' }}>
      <Paragraph text={text} />
    </div>
  );
};

export default SingleParagraph;

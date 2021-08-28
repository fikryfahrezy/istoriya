import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import style from './Paragraph.module.css';

export type ParagraphProps = {
  text: string;
};

const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <div className={style.paragraphContainer}>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <p className={style.paragraph}>{text}</p>
      </ScrollAnimation>
    </div>
  );
};

export default Paragraph;

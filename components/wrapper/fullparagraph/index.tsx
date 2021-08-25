import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import style from './Fullparagraph.module.css';

const FullparagraphWrapper = () => {
  return (
    <div className={style.centerText}>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <p className={style.centerParagraf}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni.
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default FullparagraphWrapper;

import style from './Subtitle.module.css';

type SubtitleProps = {
  text: string;
};

const Subtitle = ({ text = '' }: SubtitleProps) => {
  return <h2 className={style.subTitle}>{text}</h2>;
};

export default Subtitle;

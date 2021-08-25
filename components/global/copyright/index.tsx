import style from './Copyright.module.css';

const Copyright = () => {
  return (
    <div className={style.copyr}>
      2019 c
      <a
        href="https://themeforest.net/user/ig_design/portfolio"
        rel="noreferrer"
        target="_blank"
        className={`hover-target`}
      >
        Euthenia
      </a>
    </div>
  );
};

export default Copyright;

import {ReactComponent as ImgIcon} from 'assets/icons/Vector.svg';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className='container'>
      <div className={styles.hero}>
        <div className={styles.hero_icon}>
          <ImgIcon/>
        </div>
        <div className={styles.hero_content}>
          <h2 className={styles.hero_content__title}>
            Article description.
          </h2>
          <p className={styles.hero_content__descr}>
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
  )
};

export {Hero};
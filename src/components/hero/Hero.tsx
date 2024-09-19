import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.hero}>
        <div className={styles.hero_img}>
        </div>
        <div className={styles.hero_content}>
          <h2 className={styles.hero_content__title}>
            May I go to the bathroom? 
          </h2>
          <p className={styles.hero_content__descr}>
            Решаем загадку школьных лет и объясняем 
            разницу между модальными глаголами may и can. 
          </p>
        </div>
      </div>
    </div>
  )
};

export {Hero};
import { post } from 'components/PostContent/post';
import styles from './ArticleNav.module.scss';

const ArticleNav: React.FC = () => {
  return (
    <div className={styles.nav__container}>
      <h3 className={styles.nav__title}>
        Содержание статьи
      </h3>
      <ul className={styles.nav__list}>
        {
          post.map((item, i) => (
            <li key={item.title}
            className={styles.nav__item}
            >
              <span className={styles.nav__number}>
                {++i}
              </span>
              <a href={`#${item.title}`}
              className={styles.nav__link}
              >
                {item.title}
              </a>
            </li>
          ))
        }
      </ul> 
    </div>
  )
};

export {ArticleNav};
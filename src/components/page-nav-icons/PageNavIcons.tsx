import { pageNavIconsArray } from 'components/page-nav/page-nav-icons';
import styles from './PageNavIcons.module.scss';

const PageNavIcons: React.FC = () => {
  return (
    <ul className={styles.nav}>
      {
        pageNavIconsArray.map(item => (
          <li key={item} className={styles.nav__item}>
            <span className={styles.nav__item_text}>
              {item}
            </span>
        </li>
        ))
      }
    </ul>
  )
};

export {PageNavIcons};
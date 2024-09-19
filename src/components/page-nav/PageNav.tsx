import { Link } from 'react-router-dom';
import { navItems } from './page-nav';
import styles from './PageNav.module.scss';

const PageNav: React.FC = () => {
  return (
    <ul className={styles.nav}>
      {
        navItems.map(item => (
          <li key={item.title} className={styles.nav__item}>
            <span className={styles.nav__item_text}>
              <Link to={"/"} className={styles.nav__item_link}>
                {item.title}
              </Link>
            </span>
          </li>
        ))
      }
    </ul>
  );
};

export {PageNav};

import { TItemTemplate } from './item-template.type';

import styles from './ItemTemplate.module.scss';

const ItemTemplate: React.FC<TItemTemplate> = ({title, items}) => {
  return (
    <div className={styles.nav__content}>
    <h3 className={styles.nav__title}>
      {title}
    </h3>
    <ul className={styles.nav__list}>
      {
        items.map(item => (
          <li className={styles.nav__item}
            key={item.title}
          >
            <a href={item.path}
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

export {ItemTemplate};
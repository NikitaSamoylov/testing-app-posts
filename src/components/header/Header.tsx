import { Logo } from 'icons/logo';
import { PageNav } from 'components/page-nav';
import { MenuArrow } from 'icons/menu-arrow';
import { PageNavIcons } from 'components/page-nav-icons';
import { ArticleNav } from 'components/article-nav';
import { useToggleMenu } from 'hooks/useToggleMenu';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, isHeader, isHeaderContent, handleHeader] = useToggleMenu();

  return (
    <div className={
      isOpen 
      ? `${styles.header} ${styles.header_open}` 
      : styles.header}
      >
        <div>
          <div className={styles.header__logo}>
          <Logo bg="black" text="white"/>
          {
            isHeader && (
              <span className={styles.header__title }>
                {isHeader}
              </span> 
            )
          }
        </div>
        <div className={
          isOpen 
          ? `${styles.header__arrow} ${styles.header__arrow_open}` 
          : styles.header__arrow}
          onClick={handleHeader}
        >
          <MenuArrow/>
        </div>
      </div>
      <div className={styles.header__items_content}>
        <PageNavIcons/>
        {
        isHeaderContent && (
          <>
            <PageNav/>
          </>
        )
        }
      </div>
      {
        isHeaderContent && (
          <ArticleNav/>
        )
      }
    </div>
  )
};

export {Header};
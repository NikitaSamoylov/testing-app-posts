import { Logo } from 'icons/logo';
import styles from './PostTitle.module.scss';
import { MenuArrow } from 'icons/menu-arrow';
import { ArticleNav } from 'components/article-nav';
import { PageNav } from 'components/page-nav';
import { PageNavIcons } from 'components/page-nav-icons';
import { useToggleMenu } from 'hooks/useToggleMenu';

const PostTitle: React.FC = () => {
  const [isHeader, isOpen, isHeaderContent, handleHeader] = useToggleMenu();

  return (
    <div className={styles.postTitle}>
      <div className={
      isOpen 
      ? `${styles.header} ${styles.header_open}` 
      : styles.header}
      >
        <div className={styles.header__header}>
          <div className={styles.header__logo}>
              <Logo bg="black" text="white"/>
              {
                isOpen && (
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
        {
        isHeaderContent && (
          <>
            <PageNavIcons/>
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
      <h1 className={styles.postTitle__title}>
        Can и may: разница? 
      </h1>
    </div>
  )
};

export {PostTitle};
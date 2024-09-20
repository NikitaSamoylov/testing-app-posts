import { ChangeEvent, ReactNode, useEffect, useRef } from 'react';
import { Logo } from 'icons/logo';
import { MenuArrow } from 'icons/menu-arrow';
import { useToggleMenu } from 'hooks/useToggleMenu';
import styles from './HeaderMobile.module.scss';
import { ArticleNav } from 'components/article-nav';
import { PageNavIcons } from 'components/page-nav-icons';
import { PageNav } from 'components/page-nav';

const HeaderMobile: React.FC = () => {
  const [isOpen, isHeader, isHeaderContent, handleHeader] = useToggleMenu();
  const ref = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handleHeader()
    }
  }

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [handleHeader]);

  return (
    <header className={
      isOpen 
      ? `${styles.header} ${styles.header_mobile_open}` 
      : styles.header
      }>
        <div>
          <div className={styles.header_mobile}>
            <Logo bg="black" text="white"/>
          <span className={styles.header_mobile__title}>
            Awesome blog
          </span>
          <div className={
            isOpen
            ? `${styles.header_mobile__icon} ${styles.header_mobile__icon_open}`
            : `${styles.header_mobile__icon}`
          }
            onClick={handleHeader}
            ref={ref}
          >
            <MenuArrow/>
          </div>
        </div>
        <div className={styles.header_mobile__items_content}>
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
    </header>
  )
};

export {HeaderMobile};
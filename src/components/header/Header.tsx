import { useState, useEffect } from 'react';
import { Logo } from 'icons/logo';
import { PageNav } from 'components/page-nav';
import styles from './Header.module.scss';
import { MenuArrow } from 'icons/menu-arrow';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeader, setIsHeader] = useState('');

  const handleHeader = () => {
    console.log('click')
    setIsOpen(isOpen => !isOpen)
  };

  useEffect(() => {
      if (!isOpen) {
        return setIsHeader('')
      };
   
      const fadeIn = setTimeout(() => {
        setIsHeader('Awesome blog')
      }, 400)

    return () => clearInterval(fadeIn)
  }, [isOpen]);

  return (
    <div className={isOpen ? `${styles.header} ${styles.header_open}` : styles.header}>
      <div className={styles.header__logo}>
        <Logo bg="black" text="white"/>
        {/* <span className={isOpen ? styles.header__title : styles.header__title_none}>
          {isHeader}
        </span> */}
        {
          isHeader && (
            <span className={styles.header__title }>
              {isHeader}
            </span> 
          )
        }
      </div>
      <div className={isOpen ? `${styles.header__arrow} ${styles.header__arrow_open}` : styles.header__arrow}
      onClick={handleHeader}
      >
        <MenuArrow/>
      </div>
      <PageNav/>
    </div>
  )
};

export {Header};
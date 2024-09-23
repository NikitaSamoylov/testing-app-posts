import { Logo } from 'icons/logo';
import styles from './Footer.module.scss';
import { FB } from 'icons/fb';
import { Twitter } from 'icons/twitter';
import { Insta } from 'icons/insta';
import { AboutNavItem } from 'components/FooterNav/AboutNavItem';
import { CommunityNavItem } from 'components/FooterNav/CommunityNavItem';
import { SocialNavItem } from 'components/FooterNav/SocialNavItem';
import { FooterCopyright } from 'components/FooterCopyright';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__main_content}>
          <div className={styles.footer__content_logo}>
            <div className={styles.footer__logo}>
              <Logo bg="black" text="white"/>
              <span className={styles.footer__logo_title}>
                Awesome blog
              </span>
            </div>
            <p className={styles.footer__description}>
              Our vision is to provide convenience
              and help increase your sales business.
            </p>
            <div className={styles.footer__socials}>
              <div className={styles.footer__socials_item}>
                <FB bg={"white"} text={"black"}/>
              </div>
              <div className={styles.footer__socials_item}>
                <Twitter bg={"white"} text={"black"}/>
              </div>
              <div className={styles.footer__socials_item}>
                <Insta bg={"white"} text={"black"}/>
              </div>
            </div>
          </div>
          <div className={styles.footer__socials_nav}>
            <AboutNavItem/>
            <CommunityNavItem/>
            <SocialNavItem/>
          </div>
        </div>
        <FooterCopyright/>
      </div>
    </div>
  )
};

export {Footer};
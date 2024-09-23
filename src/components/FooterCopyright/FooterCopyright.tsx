import styles from './FooterCopyright.module.scss';

const FooterCopyright: React.FC = () => {
  return (
    <div className={styles.copyright}>
      <span className={styles.copyright__item}>
        ©2024 Company Name. All rights reserved
      </span>
      <div className={styles.copyright__policy}>
        <span className={styles.copyright__item}>
          <a href="/"
            className={styles.copyright__link}
          >
            Privacy & Policy
          </a>
        </span>
        <span className={styles.copyright__item}>
          <a href="/"
            className={styles.copyright__link}
          >
            Terms & Condition
          </a>
        </span>
      </div>
    </div>
  )
};

export {FooterCopyright};
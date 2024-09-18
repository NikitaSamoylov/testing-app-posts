import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className="container">
      <div className={styles.header}>
        <h1 className={styles.header__title}>
          Article title
        </h1>
      </div>
    </header>
  )
};

export {Header};
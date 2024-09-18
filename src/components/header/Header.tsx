import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <h1 className={styles.header__title}>
          Article title
        </h1>
      </div>
    </header>
  )
};

export {Header};
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.header__title}>
          Can и may в чем разница? 
        </h1>
      </div>
    </div>
  )
};

export {Header};
import styles from './PostTitle.module.scss';

const PostTitle: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>
        Can и may в чем разница? 
      </h1>
    </div>
  )
};

export {PostTitle};
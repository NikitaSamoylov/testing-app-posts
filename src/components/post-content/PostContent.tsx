import { post } from './post';
import styles from './PostContent.module.scss';

const PostContent: React.FC = () => {
  return (
    <div className={styles.postContent}>
      {
        post.map((item, i) => (
          <div key={i}>
          <h2 className={styles.postContent__title} 
          key={i}
          id={item.title}
          >
            {item.title}
          </h2>
          {
            Array.isArray(item.description)
            ? (
                item.description.map(elem => (
                  <p className={
                    `${styles.postContent__descr}
                    ${styles.postContent__descr_tab}`
                  } key={elem}>
                    {elem}
                  </p>
                ))
              )
            : (
                <p className={styles.postContent__descr}>
                  {item.description}
                </p>
              )
          }
          </div>
        ))
      }
    </div>
  )
};

export {PostContent};
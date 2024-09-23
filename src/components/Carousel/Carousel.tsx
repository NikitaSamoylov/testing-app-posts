import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./carousel-config";
import styles from './Carousel.module.scss';
import './carousel.styles.default.css';

import { posts } from './posts';

const CarouselSlider: React.FC = () => {
  return (
    <div>
      <h2 className={styles.carousel__header}>
        Похожие посты
      </h2>
      <Slider {...settings}>
        {
          posts.map(post => (
            <div className={styles.carousel__slide}
              key={post.title}
            >
              <img src={post.img} alt="картинка"
                className={styles.carousel__img}
              />
              <h2 className={styles.carousel__title}>
                {post.title}
              </h2>
              <p className={styles.carousel__descr}>
                {post.description}
              </p>
            </div>
          ))
        }
    </Slider>
    </div>
  )
};

export {CarouselSlider};
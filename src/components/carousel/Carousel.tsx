import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './Carousel.module.scss';
import './carousel.styles.default.scss';

import { posts } from './posts';

const CarouselSlider: React.FC = () => {

  return (
    <div>
      <h2 className={styles.carousel__header}>
        Похожие посты
      </h2>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
      {
        posts.map(post => (
          <SwiperSlide style={{minWidth: 430}}>
            <img src={post.img} alt="картинка" />
            <h2 className={styles.carousel__title}>
              {post.title}
            </h2>
            <p className={styles.carousel__descr}>
              {post.description}
            </p>
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  )
};

export {CarouselSlider};
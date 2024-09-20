import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useToggleMenu } from "hooks/useToggleMenu";
import styles from './Carousel.module.scss';

import { posts } from './posts';

const CarouselSlider: React.FC = () => {
  const [isOpen] = useToggleMenu();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1343,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    ]
  };  

  console.log(isOpen)

  return (
    <div>
      <h2 className={styles.carousel__header}>
        Похожие посты
      </h2>
      <Slider {...settings}>
        {
          posts.map(post => (
            <div className={styles.carousel__slide} style={{width: '300px'}}>
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
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
      
      {/* <Swiper
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
    </Swiper> */}
    </div>
  )
};

export {CarouselSlider};
import { PostTitle } from "components/PostTitle";
import { Hero } from "components/Hero";
import { PostContent } from "components/PostContent";
import { CarouselSlider } from "components/Carousel";
import { Header } from "components/Header";
import { HeaderMobile } from "components/HeaderMobile";
import styles from './Main.module.scss';
import { Footer } from "components/Footer";

const MainPage: React.FC = () => {
  return (
    <>
      <div className={styles.page}>
        <header className={styles.header__content}>
          <div className={styles.header_desktop}>
            <Header/>
          </div>
          <div className={styles.header_mobile}>
            <HeaderMobile/>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.header}>
            <PostTitle/>
          </section>
          <section className={styles.hero}>
            <Hero/>
          </section>
          <section className={styles.postContent}>
            <PostContent/>
          </section>
          <section className={styles.carousel}>
            <CarouselSlider/>
          </section>
        </main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  )
};

export {MainPage};
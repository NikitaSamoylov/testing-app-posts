import { PostTitle } from "components/post-title";
import { Hero } from "components/hero";
import { PostContent } from "components/post-content";
import { CarouselSlider } from "components/carousel";
import { Header } from "components/header";
import styles from './Main.module.scss';
import { MenuArrow } from "icons/menu-arrow";

const MainPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header__content}>
        <Header/>
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
        <section>
          <CarouselSlider/>
        </section>
      </main>
    </div>
  )
};

export {MainPage};
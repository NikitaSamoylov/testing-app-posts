import { Header } from "components/header";
import { Hero } from "components/hero";
import { PostContent } from "components/post-content";
import styles from './Main.module.scss';
import { CarouselSlider } from "components/carousel";

const MainPage: React.FC = () => {
  return (
    <>
    <header className={styles.header}>
      <Header/>
    </header>
      <main>
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
    </>
  )
};

export {MainPage};
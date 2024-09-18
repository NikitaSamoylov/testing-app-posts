import { Header } from "components/header";
import { Hero } from "components/hero";

const MainPage: React.FC = () => {
  return (
    <>
      <Header/>
      <main style={{marginTop: '24px'}}>
        <Hero/>
      </main>
    </>
  )
};

export {MainPage};
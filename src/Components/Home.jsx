import Design from "./HomeComponents/Design";
import Explore from "./HomeComponents/Explore";
import Footer from "./HomeComponents/Footer";
import Hero from "./HomeComponents/Hero";

import Services from "./HomeComponents/Services";
import Why from "./HomeComponents/Why";

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.title = "Home";
  return (
    <>
      <Hero />
      <Design />
      <Why />
      <Explore />
      <Services />

      <Footer />
    </>
  );
}

export default Home;

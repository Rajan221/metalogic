import Design from "./HomeComponents/Design";
import Explore from "./HomeComponents/Explore";
import Footer from "./HomeComponents/Footer";
import Hero from "./HomeComponents/Hero";
import Navbar from "./HomeComponents/Navbar";

import Services from "./HomeComponents/Services";
import Why from "./HomeComponents/Why";

function Home() {
  return (
    <>
      <Navbar />
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

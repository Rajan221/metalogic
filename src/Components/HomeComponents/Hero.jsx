import "../Styles/Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="hero">
      <iframe src="./network/index.html" title="network"></iframe>

      <div id="heroInside">
        <motion.div
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
          }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <div id="headline">
            <h1>Transforming Today</h1>
            <h1>For</h1>
            <h1>Digital Tomorrow</h1>
          </div>
          <div id="slogan">
            We are committed to offering state-of-the-art software solutions
            that enable companies to prosper in the digital world. <br />
          </div>
          <div id="learnMoreButton">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

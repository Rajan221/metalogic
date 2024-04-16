import { useState, useRef, useEffect } from "react";
import "../Styles/Explore.css";
import ExploreComponent from "./ExploreComponent";
import { motion, useInView, useAnimation } from "framer-motion";

function Explore() {
  const [activeComponent, setActiveComponent] = useState("Banshwali");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log("Element is in view: ", isInView);
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <div id="explore" ref={ref}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div id="exploreInner">
          <h1 id="exploreHeadline">Explore Our Products</h1>

          <div id="toggler">
            <div
              className={activeComponent === "Banshwali" ? "active" : ""}
              onClick={() => setActiveComponent("Banshwali")}
            >
              Banshwali
            </div>
            <div
              className={activeComponent === "Digital Khata" ? "active" : ""}
              onClick={() => setActiveComponent("Digital Khata")}
            >
              Digital Khata
            </div>
          </div>

          <ExploreComponent active={activeComponent} />
        </div>
      </motion.div>
    </div>
  );
}

export default Explore;

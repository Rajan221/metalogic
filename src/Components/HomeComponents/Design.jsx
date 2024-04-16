import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../Styles/Design.css";
import { ReactComponent as TestSvg } from "../Images/test.svg";

function Design() {
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
    <div id="design">
      <div id="innerDesign">
        <motion.div
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
          }}
          initial="initial"
          animate={mainControls}
          transition={{ duration: 0.5 }}
        >
          <h1 ref={ref}>Design, Build And Scale Your Vison With Us</h1>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="svg-container">
              <TestSvg className="animated-svg" id="svg" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Design;

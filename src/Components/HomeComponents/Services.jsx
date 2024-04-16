import Card from "./Card";
import mobile from "../Images/icons/mobile.svg";
import ui from "../Images/icons/uiux.svg";
import brand from "../Images/icons/brand.svg";
import web from "../Images/icons/web.svg";
import internship from "../Images/icons/internship.svg";
import "../Styles/Services.css";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log("Element is in view: ", isInView);
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);
  const variables = [
    {
      key: 1,
      image: ui,
      title: "UI/UX",
      first:
        "we create interfaces that are not just visually appealing, but also intuitive and conversion-focused.",
      back: "Discover how we design interfaces that blend visual appeal with intuitiveness, driving conversions and enhancing user experience seamlessly.",
    },
    {
      key: 2,
      image: mobile,
      title: "Mobile Development",
      first:
        "From streamlining operations to data-driven insights, we create solutions that empower your business to thrive in the digital age.",
      back: "Explore how our tailored solutions drive operational efficiency and leverage data insights for your business in the digital age.",
    },
    {
      key: 3,
      image: brand,
      title: "Brand & Marketing",
      first:
        "Our branding experts craft strategies, logos, and visuals that resonate with your target audience, leaving a lasting impression.",
      back: "Discover how our branding strategies, logos, and visuals create a lasting impact, resonating effectively with your target audience.",
    },
    {
      key: 4,
      image: internship,
      title: "Internship/Training",
      first:
        "Our training programs and workshops cover a range of topics, from software utilization to design principles, enhancing your team's skills and productivity.",
      back: "Explore our comprehensive training programs and workshops, spanning software utilization to design principles, elevating your team's skills and productivity.",
    },
    {
      key: 5,
      image: web,
      title: "Web Development",
      first:
        "Our creative designers and skilled developers collaborate to create stunning websites that engage visitors and convert them into loyal customers.",
      back: "Witness the synergy of our creative designers and skilled developers, crafting stunning websites that captivate visitors and foster customer loyalty.",
    },
  ];
  return (
    <div id="services" ref={ref}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div>
          <div id="ourServices">Our Services</div>
          <h1>Empowering Your Vison</h1>
          <div id="serviceQuote">
            Our range of offerings is carefully curated to cater to your diverse
            needs, ensuring that your digital journey is seamless, captivating,
            and results-driven.
          </div>
          <div id="buttonServices">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div id="servicesCards">
          {variables.map((info) => (
            <motion.div
              variants={{
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="initial"
              animate={mainControls}
              transition={{ duration: 0.5, delay: info.key / 4 }}
            >
              <Card
                key={info.key}
                title={info.title}
                image={info.image}
                first={info.first}
                back={info.back}
                class={`class${info.key}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Services;

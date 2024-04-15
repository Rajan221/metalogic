import React, { useState, useEffect } from "react";
import "../Styles/Odometer.css";

const Odometer = () => {
  const [codeWritten, setCodeWritten] = useState(0);
  const [coffeeDrank, setCoffeeDrank] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const animateOdometer = () => {
    if (isVisible) {
      setTimeout(() => {
        if (codeWritten < 313) {
          setCodeWritten(codeWritten + 1);
        }
        if (coffeeDrank < 210) {
          setCoffeeDrank(coffeeDrank + 1);
        }
      }, 5); // Adjust the interval as needed for smoother animation
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          // Reset counters when out of view
          setCodeWritten(0);
          setCoffeeDrank(0);
        }
      });
    }, []);

    const target = document.getElementById("odometerContainer");
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    animateOdometer();
  }, [isVisible, codeWritten, coffeeDrank]);

  return (
    <div id="odometerContainer">
      <div>
        <div id="number">{codeWritten}</div>
        <div>kilometers of code written</div>
      </div>
      <div>
        <div id="number">{coffeeDrank} </div>
        <div>Liters of Coffee Drank</div>
      </div>
    </div>
  );
};

export default Odometer;

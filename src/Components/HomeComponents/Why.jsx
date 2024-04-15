import React, { useEffect, useRef } from "react";
import "../Styles/Why.css";

function Why() {
  const whyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = entry.target.querySelector("#dots");
          path.querySelector("animate").beginElement(); // Start animation
        }
      });
    });

    observer.observe(whyRef.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);
  return (
    <div id="why" ref={whyRef}>
      <div id="whyGlassBack">
        <h1 id="whyMetaLogic">
          Why MetaLogic <span id="question">?</span>
        </h1>

        <div id="whyQuote">
          Innovation is our driving force. We explore the latest tech trends to
          deliver groundbreaking solutions that keep you ahead.
        </div>

        <div id="flowLine">
          <div id="svgFlowLine">
            <svg
              width="65"
              height="384"
              viewBox="0 0 65 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="dots"
                d="M30 32L30 383"
                stroke="#999999"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <animate
                  attributeName="d"
                  from="M30 50L30 0"
                  to="M30 32L30 300" /* Animates to full height */
                  dur="2s" /* Adjust animation duration here */
                  fill="freeze"
                />
              </path>
              <rect
                x="29"
                y="23"
                width="2"
                height="70"
                rx="1"
                fill="url(#paint0_linear_1_10894)"
              ></rect>
              <g filter="url(#filter0_di_1_10894)">
                <circle
                  cx="30.5"
                  cy="29.5"
                  r="18.5"
                  fill="url(#paint1_linear_1_10894)"
                ></circle>
              </g>
              <defs>
                <filter
                  id="filter0_di_1_10894"
                  x="0"
                  y="0"
                  width="65"
                  height="65"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="2" dy="3"></feOffset>
                  <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0856471 0 0 0 0 0.0784314 0 0 0 0 0.439216 0 0 0 0.49 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_10894"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_10894"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dx="2" dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.334833 0 0 0 0 0.425998 0 0 0 0 0.98 0 0 0 1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="lighten"
                    in2="shape"
                    result="effect2_innerShadow_1_10894"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_1_10894"
                  x1="30"
                  y1="23"
                  x2="30"
                  y2="93"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E70C0C"></stop>
                  <stop offset="1" stopColor="#EB6BF7"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_10894"
                  x1="30.5"
                  y1="11"
                  x2="30.5"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D64949"></stop>
                  <stop offset="1" stopColor="#F62525"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div id="texts">
            <h3>Innovation at the Core</h3>
            <div>
              We thrive on innovation and continuously explore the latest
              technologies to provide you with groundbreaking solutions that
              keep you ahead of the curve.
            </div>

            <h3>Collaboration is the key</h3>
            <div>
              We work closely with you to understand your goals, challenges, and
              aspirations, ensuring our solutions align perfectly with your
              business objectives.
            </div>

            <h3>Your Success, Our Purpose</h3>
            <div>
              Our solutions are designed to enhance efficiency, boost
              productivity, and drive ROI, giving you a competitive edge in your
              industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;

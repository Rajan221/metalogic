import React, { useState, useEffect } from "react";
import "./Styles/Changes.css";
import Footer from "./HomeComponents/Footer";
import { HashLink } from "react-router-hash-link";
import { useNavbar } from "../context/NavbarContext";
import vid1 from "./demonstration/vid1.mp4";
import vid2 from "./demonstration/vid2.mp4";
import vid3 from "./demonstration/vid3.mp4";
import vid4 from "./demonstration/vid4.mp4";
import img1 from "./demonstration/orig.png";
import img2 from "./demonstration/recreated.png";
import img3 from "./demonstration/img3.png";

function Changes() {
  const { setActive } = useNavbar();

  const handleMouseOver = (event) => {
    event.target.play();
  };

  const handleMouseOut = (event) => {
    event.target.pause();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.title = "Changes";

  return (
    <div>
      <div id="changes">
        <div>
          <h1>Change Information:</h1>
          <div>
            1) There was a certain glitch like effect when the network of the
            hero section was clicked
            <HashLink
              className="linkButton"
              to="/#hero"
              onClick={() => setActive("home")}
            >
              <div id="button" className="linkButton">
                Go see the change
              </div>
            </HashLink>
            <div>
              <div id="origVrec">
                <div>
                  <div id="container">
                    <video
                      id="demoVideos"
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      loop
                      muted="muted"
                    >
                      <source src={vid1} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div id="overlay">Hover to play.</div>
                  </div>
                  <div>Original</div>
                </div>
                <div>
                  <div id="container">
                    <video
                      id="demoVideos"
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      loop
                      muted="muted"
                    >
                      <source src={vid2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div id="overlay">Hover to play.</div>
                  </div>
                  <div>Recreated</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            2) The title only had the animation while scrolling while the below
            container remained still.
            <HashLink
              className="linkButton"
              smooth
              to="/#explore"
              onClick={() => setActive("home")}
            >
              <div id="button" className="linkButton">
                Go see the change
              </div>
            </HashLink>
            <div>
              <div id="origVrec">
                <div>
                  <div id="container">
                    <video
                      id="demoVideos"
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      loop
                      muted="muted"
                    >
                      <source src={vid3} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div id="overlay">Hover to play.</div>
                  </div>
                  <div>Original</div>
                </div>
                <div>
                  <div id="container">
                    <video
                      id="demoVideos"
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      loop
                      muted="muted"
                    >
                      <source src={vid4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div id="overlay">Hover to play.</div>
                  </div>
                  <div>Recreated</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            3) The space on the right side of the service section seem to be
            huge.
            <HashLink
              className="linkButton"
              smooth
              to="/#services"
              onClick={() => setActive("home")}
            >
              <div id="button">Go see the change</div>
            </HashLink>
            <div>
              <div id="origVrec">
                <div>
                  <img id="demoImages" src={img1} alt="" srcset="" />
                  <div>Original(Image)</div>
                </div>
                <div>
                  <img id="demoImages" src={img2} alt="" srcset="" />
                  <div>Recreated(Image)</div>
                </div>
              </div>
            </div>
          </div>

          <h1>Problems Encountered:</h1>
          <div>
            I was unable to recreate the second section of the home page which
            consist of the svg animation.
            <HashLink
              className="linkButton"
              smooth
              to="/#innerDesign"
              onClick={() => setActive("home")}
            >
              <div id="button">See the Section</div>
            </HashLink>
            <img id="demoImages" src={img3} alt="" />
          </div>

          <h1>Setup Instructions:</h1>
          <div>
            <h2>1. Create a React App</h2>

            <div>
              First, make sure you have Node.js installed. Then, create a new
              React app using Create React App:
            </div>

            <pre>
              <code>npx create-react-app my-app cd my-app</code>
            </pre>
            <div>
              Other tools are: Framer Motion, React-router-dom,
              React-Router-Hash-Link
            </div>
            <br />
            <div>These dependencies can be installed using:</div>

            <pre>
              <code>
                npm i framer-motion react-router-dom react-router-hash-link
              </code>
            </pre>
          </div>
        </div>
      </div>
      <Footer hide={true} />
    </div>
  );
}

export default Changes;

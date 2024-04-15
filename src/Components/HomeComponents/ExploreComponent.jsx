import React, { useState, useEffect } from "react";
import "../Styles/ExploreComponent.css";
import banshwali1 from "../Images/chart.svg";
import banshwali2 from "../Images/contribution.svg";
import banshwali3 from "../Images/idcard.svg";

import digital1 from "../Images/cashout.svg";
import digital2 from "../Images/dashboard.svg";
import digital3 from "../Images/task.svg";

function ExploreComponent(props) {
  const banshwaliImages = [banshwali1, banshwali2, banshwali3];
  const digitalImages = [digital1, digital2, digital3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          (props.active === "Banshwali"
            ? banshwaliImages.length
            : digitalImages.length)
      );
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [props.active, banshwaliImages.length, digitalImages.length]);

  const banshwali = {
    images: banshwaliImages,
    quote:
      "Trace the footsteps of your ancestors and discover your family tree's story.",
    headline: "View full Banshwali chart digitally.",
    features: [
      "View your Banshaj information all in one place.",
      "Bring all generations together under one roof creates a unique opportunity for shared experiences, mutual learning, and the strengthening of family bonds.",
      "Manage and learn about events nearby you.",
    ],
  };

  const digitalKhata = {
    images: digitalImages,
    quote: "Where Finances unify for business and personal success",
    headline: "Powerful POS system",
    features: [
      "Efficient personal finance management",
      "Accurate interest calculator",
      "Timely reminders and alerts",
      "Streamlined record-keeping",
      "Robust data security and many more",
    ],
  };

  const activeContent = props.active === "Banshwali" ? banshwali : digitalKhata;

  return (
    <>
      <div id="demo">
        <div id="imageSliding">
          <div className="imageContainer">
            <img
              id="image"
              src={activeContent.images[currentImageIndex]}
              alt={props.active}
              className="imageTransition"
              key={currentImageIndex} // Add key to trigger re-render when image changes
            />
          </div>
          <div>{activeContent.quote}</div>
        </div>
        <div id="features">
          <div>
            <h1>Features</h1>
            <p>{activeContent.headline}</p>
            <hr />
            <ul>
              {activeContent.features.map((feature, index) => (
                <li className="featuresPoints" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div id="button">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreComponent;

import React from "react";

import "../Styles/Card.css";

const Card = (props) => {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner`}>
        <div className={`flip-card-front ${props.class}`}>
          <div id="inside">
            <div id="iconDiv">
              <img id="icons" src={props.image} alt="" />
            </div>

            <div id="serviceTitle">{props.title}</div>
            <div id="serviceFirst">{props.first}</div>
          </div>
        </div>
        <div className={`flip-card-back ${props.class}back`}>
          <div id="inside">
            <div id="backText">{props.back}</div>
            <br />
            <br />
            <a href="#" id="seeMore">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

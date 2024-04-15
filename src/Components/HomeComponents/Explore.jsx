import { useState } from "react";
import "../Styles/Explore.css";
import ExploreComponent from "./ExploreComponent";

function Explore() {
  const [activeComponent, setActiveComponent] = useState("Banshwali");

  return (
    <div id="explore">
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
    </div>
  );
}

export default Explore;

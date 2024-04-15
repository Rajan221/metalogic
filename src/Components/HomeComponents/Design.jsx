import "../Styles/Design.css";
import { ReactComponent as TestSvg } from "../Images/test.svg";

function Design() {
  return (
    <div id="design">
      <div id="innerDesign">
        <h1>Design, Build And Scale Your Vison With Us</h1>

        <div className="svg-container">
          <TestSvg className="animated-svg" id="svg" />
        </div>
      </div>
    </div>
  );
}

export default Design;

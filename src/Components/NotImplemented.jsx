import { Link } from "react-router-dom";
import "./Styles/NotImplemented.css";

function NotImplemented() {
  return (
    <div id="notImplemented">
      <div id="insideNot">
        <h1>Error 404: This page is not been implemented</h1>
        <Link to="/">Visit the home page here</Link>
      </div>
    </div>
  );
}

export default NotImplemented;

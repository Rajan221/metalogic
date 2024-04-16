import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../Images/metalogo.png";
import { useNavbar } from "../../context/NavbarContext";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [info, setInfo] = useState("hideInfo");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
      if (!visible) {
        setInfo("hideInfo");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const { setActive } = useNavbar();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActive(path.substring(1)); // Remove the leading slash
  }, [location, setActive]);

  return (
    <nav className={visible ? "navbar" : "navbar hidden"}>
      <div id="contentsInside">
        <div id="logoContainer">
          <img src={logo} id="logo" alt="" />
          <span id="logoText">MetaLogic</span>
        </div>
        <div id="navItems">
          <NavItem to="/" label="Home" />
          <NavItem to="/changes" label="Changes" />
          <NavItem to="/notImplemented" label="Services" />
          <NavItem to="/notImplemented" label="Career" />
          <NavItem to="/notImplemented" label="Blogs" />
          <NavItem to="/notImplemented" label="About Us" />
        </div>
        <div id="getInTouch">
          <div
            id="infoBox"
            onClick={() => {
              setInfo(info === "hideInfo" ? "showInfo" : "hideInfo");
            }}
          >
            <i class="fa-solid fa-circle-info" id="info"></i>
            <div className="information" id={info}>
              I found that some places like the hero section, explore our
              products section and services section can use some rework.
              <div id="forMore">
                For more information you can visit the link below
              </div>
              <Link
                onClick={() => {
                  setActive("changes");
                }}
                id="moreInfo"
                to="changes"
              >
                Detailed Information
              </Link>
            </div>
          </div>
          <div id="buttonNavbar">Get in touch</div>
        </div>
      </div>
    </nav>
  );
}

// Component for individual nav item
const NavItem = ({ to, label }) => {
  const { activeLink } = useNavbar();
  const isActive = activeLink === to.substring(1);

  return (
    <div className={isActive ? "active" : "navLinks"}>
      <Link id="link" to={to}>
        {label}
      </Link>
    </div>
  );
};

export default Navbar;

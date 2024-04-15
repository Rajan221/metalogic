import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../Images/metalogo.png";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={visible ? "navbar" : "navbar hidden"}>
      <div id="contentsInside">
        <div id="logoContainer">
          <img src={logo} id="logo" alt="" />
          <span id="logoText">MetaLogic</span>
        </div>
        <div id="navItems">
          <div id="active">Home</div>
          <div className="navLinks">Services</div>
          <div className="navLinks">Career</div>
          <div className="navLinks">Blogs</div>
          <div className="navLinks">About Us</div>
        </div>
        <div id="getInTouch">
          <div id="buttonNavbar">Get in touch</div>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

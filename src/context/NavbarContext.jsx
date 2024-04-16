import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbar = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");

  const setActive = (link) => {
    setActiveLink(link);
  };

  return (
    <NavbarContext.Provider value={{ activeLink, setActive }}>
      {children}
    </NavbarContext.Provider>
  );
};

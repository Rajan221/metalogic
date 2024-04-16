import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/HomeComponents/Navbar";
import Home from "./Components/Home";
import Changes from "./Components/Changes";
import NotImplemented from "./Components/NotImplemented";
import { NavbarProvider } from "./context/NavbarContext"; // Import the context provider

function App() {
  return (
    <Router>
      <NavbarProvider>
        {" "}
        {/* Wrap the entire application with the context provider */}
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/changes" element={<Changes />} />
            <Route path="/notImplemented" element={<NotImplemented />} />
          </Routes>
        </div>
      </NavbarProvider>
    </Router>
  );
}

export default App;

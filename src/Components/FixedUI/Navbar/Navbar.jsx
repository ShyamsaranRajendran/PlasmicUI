import React, { useState } from "react";
import "./Navbar.css";
import Github from "../../../assets/Images/github.png";
import { FaBars } from "react-icons/fa"; // For the hamburger icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Github} alt="Github" />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <div>Product</div>
        <div>Templates</div>
        <div>Customers</div>
        <div>Resources</div>
        <div>Pricing</div>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;

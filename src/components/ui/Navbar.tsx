import React from "react";
import "./css/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo_container">
        <a href="/" className="logo">
          NYT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

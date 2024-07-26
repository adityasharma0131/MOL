import React, { useState } from "react";
import logo from "../assets/Screenshot_2024-06-25_143958-removebg-preview 2.png";
import { RiArrowRightUpLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <img className="nav__logo" src={logo} alt="Logo" />

        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {["Home", "About Us", "Projects", "Studio", "Contact"].map(
              (item, index) => (
                <li className="nav__item" key={index}>
                  <a href="#" className="nav__link" onClick={handleClose}>
                    <RiArrowRightUpLine />
                    <span>{item}</span>
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="nav__close" id="nav-close" onClick={handleClose}>
            <RiCloseLine />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
};

export default Header;

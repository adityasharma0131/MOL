import React, { useState, useEffect } from "react";
import logo from "../assets/Screenshot_2024-06-25_143958-removebg-preview 2.png";
import { RiArrowRightUpLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : ""}`} id="header">
      <nav className="nav container">
        <img className="nav__logo" src={logo} alt="Logo" />

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about-us" },
              { name: "Services", id: "services" },
              { name: "Solutions", id: "solutions" },
              { name: "Get in Touch", id: "contact" },
              { name: "Q & A", id: "q-&-a" },
            ].map((item, index) => (
              <li className="nav__item" key={index}>
                <a className="nav__link" href={`#${item.id}`} onClick={handleClose}>
                  <RiArrowRightUpLine />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
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

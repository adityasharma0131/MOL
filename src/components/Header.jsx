// Header.js
import React, { useState, useEffect } from "react";
import logo from "../assets//Screenshot_2024-06-25_143958-removebg-preview 2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrollingDown ? "hidden" : ""}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <input type="checkbox" id="nav_check" hidden checked={isMenuOpen} readOnly />
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          {["/", "/products", "/gallery", "/about-us", "/contact-us"].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                {path.replace("/", "").replace("-", " ") || "Home"}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="close-icon" /> : <FaBars className="hamburger-icon" />}
      </label>
    </header>
  );
};

export default Header;

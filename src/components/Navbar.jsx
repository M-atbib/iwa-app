import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">DevTechno</h1>
      <GiHamburgerMenu
        className="navbar-menu"
        onClick={() => setShowNav(!showNav)}
      />
      <ul className={`navbar-links ${showNav && "active"}`}>
        <AiOutlineClose
          className="navbar-links_close"
          onClick={() => setShowNav(false)}
        />
        {navLinks.map(({ id, title, url }) => (
          <li key={id} className="navbar-links_item">
            <Link to={url} className="navbar-links_item-link">
              {title}
            </Link>
          </li>
        ))}
        <Link className="navbar-links_button" to="/login">
          Connexion
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

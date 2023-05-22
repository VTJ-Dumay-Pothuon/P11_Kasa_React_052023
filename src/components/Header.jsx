import React from "react";
import logo from "../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={pathname === "/" ? "active" : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
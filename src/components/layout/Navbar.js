import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    window.scrollY <= 50
      ? (nav.style.backgroundColor = "#333")
      : (nav.style.backgroundColor = "#003b6f");
  };
  return (
    <nav id="navbar" className="navbar bg-dark">
      <h1>
        <Link to="/">
          <span className="reactColor">A</span>
          <span className="vueColor">S</span>
          <span className="angularColor">M</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

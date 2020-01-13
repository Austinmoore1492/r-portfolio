import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    window.scrollY <= 100
      ? (nav.style.opacity = "0.8")
      : (nav.style.opacity = "1");
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
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

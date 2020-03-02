import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.onscroll = () => {
    const nav = document.querySelector("#navbar");
    window.scrollY <= 100
      ? nav.setAttribute(
        "style",
        "background-color: #343a40; border-color: #003b6f;"
      )
      : nav.setAttribute(
        "style",
        "background-color: #003b6f; border-color: #343a40;"
      );
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
        |
        <li>
          <Link to="/about">About</Link>
        </li>
        |
        <li>
          <a href="./myResume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

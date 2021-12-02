import React from "react";
import { Link } from "react-scroll";

const nav = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#121222" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {"<FYZ/>"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul
            className="navbar-nav mb-1 mb-lg-0"
            style={{ margin: "0px 0px 0px auto" }}
          >
            <li className="nav-item mx-1">
              <Link to="home" smooth={true}>
                {" "}
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="about" smooth={true}>
                {" "}
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="project" smooth={true}>
                {" "}
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="contact" smooth={true}>
                {" "}
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default nav;

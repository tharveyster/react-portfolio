import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar">
      <li className="navItem">
        <a
          href="#about"
          onClick={() => handlePageChange("About Me")}
          className={
            currentPage === "About Me" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </a>
      </li>
      <li className="navItem">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="navItem">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="navItem">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

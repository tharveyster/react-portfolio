import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
  const navbar = {
    color: 'white',
    float: 'right',
    listStyle: 'none'
  }
  const navItem = {
    display: 'inline',
    margin: '0 10px 0 20px',
    fontSize: 20
  }
  return (
    <ul className="nav nav-tabs" style={navbar}>
      <li className="nav-item" style={navItem}>
        <a
          href="#about"
          onClick={() => handlePageChange('About Me')}

          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={navItem}>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}

          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item" style={navItem}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact Me')}

          className={currentPage === 'Contact Me' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item" style={navItem}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  )
}
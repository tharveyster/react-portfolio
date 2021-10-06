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
    <ul style={navbar}>
      <li style={navItem}>
        <a
          href="#about"
          onClick={() => handlePageChange('About Me')}

          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li style={navItem}>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}

          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li style={navItem}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li style={navItem}>
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
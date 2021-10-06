import React from 'react';

export default function Navigation() {
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
      <li className="nav-item" style={navItem}>About Me</li>
      <li className="nav-item" style={navItem}>Projects</li>
      <li className="nav-item" style={navItem}>Contact Me</li>
      <li className="nav-item" style={navItem}>Resume</li>
    </ul>
  )
}
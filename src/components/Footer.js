import React from 'react';

export default function Footer() {
  const footer = {
    backgroundColor: 'royalblue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'middle'
  }
  const link = {
    color: 'white',
    verticalAlign: 'middle',
    padding: 10,
    margin: '0 10px',
    textDecoration: 'none'
  }
  return (
    <footer style={footer}>
      <a style={link} href="https://github.com/tharveyster" rel="noreferrer" target="_blank">GitHub</a>
      <a style={link} href="https://www.linkedin.com/in/todd-harvey-147410b5/" rel="noreferrer" target="_blank">LinkedIn</a>
      <a style={link} href="https://www.facebook.com/todd.harvey.3323" rel="noreferrer" target="_blank">Facebook</a>
    </footer>
  );
}
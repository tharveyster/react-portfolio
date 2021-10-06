import React from 'react';
import background from '../images/header-bg.png';
import Navigation from './Navigation';

export default function Header() {
  const header = {
    backgroundImage: `url(${background})`,
    color: 'white',
    margin: 0,
    padding: 10
  }
  return (
    <>
      <Navigation />
      <h1 style={header}>Todd Harvey</h1>
    </>
  )
}


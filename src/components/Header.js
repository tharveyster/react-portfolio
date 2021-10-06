import React from 'react';
import background from '../images/header-bg.png';

export default function Header() {
  const header = {
    backgroundImage: `url(${background})`,
    color: 'white',
    margin: 0,
    padding: 10
  }
  return (
    <>
      <h1 style={header}>Todd Harvey</h1>
    </>
  )
}


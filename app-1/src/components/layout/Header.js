import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle} >
      <h3>Minhas tarefas</h3>
      <Link style={linkStyle} to="/">Home</Link>
      <span> | </span>
      <Link to="about">About</Link>
    </header>
  );
}


const headerStyle = {
  background: "#333",
  color: "white",
  padding: "10px",
  textAlign: "center",
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
}


export default Header;
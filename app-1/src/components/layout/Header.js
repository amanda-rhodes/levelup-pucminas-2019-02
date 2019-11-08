import React from 'react';

function Header() {
  return (
    <header style={headerStyle} >
      <h3>Minhas tarefas</h3>
    </header>
  );
}


const headerStyle = {
  background: "#333",
  color: "white",
  padding: "10px",
  textAlign: "center",
}

export default Header;
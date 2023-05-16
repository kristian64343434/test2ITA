import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <a href="/" className="menu-link">
        Forside
      </a>
      <a href="/oss" className="menu-link">
        Oss
      </a>
    </div>
  );
}

export default Menu;
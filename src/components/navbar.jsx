import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a href="/home">
          <span className="my-logo">
            My Logo
          </span>
        </a>
      </div>
      <ul className="menu-list" id="list-menu">
        <li className="link">
          <a href="#Works">Works</a>
        </li>
        <li className="link">
          <a href="#About">About</a>
        </li>
        <li className="link">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="btn-menu">
        <button className="openmenu" type="button">X</button>
      </div>
    </nav>
  );
}

export default Navbar;

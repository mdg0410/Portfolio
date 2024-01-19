import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const MenuList = () => (
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
);

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Suscribirse al evento de cambio de tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderMenu = () => {
    if (windowWidth > 768) {
      // Si el ancho de la pantalla es mayor a 768px, mostrar el menú completo
      return (
        <MenuList />
      );
    }
    return (
      <div>
        Menú
      </div>
    );
  };

  return (
    <nav className="toolbar">
      <div className="logo">
        <a href="/home">
          <span className="my-logo">
            My Logo
          </span>
        </a>
      </div>
      {renderMenu()}
    </nav>
  );
}

export default Navbar;

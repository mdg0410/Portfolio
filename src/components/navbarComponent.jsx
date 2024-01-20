import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/slices/navbarSlice';
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

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
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
      {windowWidth > 768 ? (
        // Si el ancho de la pantalla es mayor a 768px, mostrar el menú completo
        <MenuList />
      ) : (
        // Si el ancho de la pantalla es menor o igual a 768px, mostrar el botón
        <button type="button" onClick={handleSidebarToggle}>
          Menú
        </button>
      )}
      {sidebarVisible && (
        // Mostrar el sidebar si está visible y el ancho de la pantalla es menor o igual a 768px
        <div className="sidebar">
          <ul>
            <li><a href="#Works">Works</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

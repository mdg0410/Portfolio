import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, selectSidebarState } from '../redux/slices/sidebarSlice';
import { ReactComponent as HamburguerIcon } from '../assets/Icons/hambuerger.svg';
import styles from '../styles/sidebar.module.css';
import { ReactComponent as CloseButton } from '../assets/Icons/btn-close-white.svg';

const SidebarComponent = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectSidebarState);
  return (
    <>
      {!isSidebarOpen ? (
        <button className={styles.menuButton} alt="Menu" type="button" onClick={() => dispatch(toggleSidebar())}>
          <HamburguerIcon />
        </button>
      ) : (
        <div className={styles.sidebar}>
          <div className={styles.closeContainer}>
            <button alt="buttonClose" className={styles.closeButton} type="button" onClick={() => dispatch(toggleSidebar())}>
              <CloseButton />
            </button>
          </div>
          <ul>
            <li><a href="#Works" onClick={() => dispatch(toggleSidebar())}>Works</a></li>
            <li><a href="#About" onClick={() => dispatch(toggleSidebar())}>About</a></li>
            <li><a href="#Contact" onClick={() => dispatch(toggleSidebar())}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarComponent;

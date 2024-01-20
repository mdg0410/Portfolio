import React from 'react';
import { toggleSidebar, selectSidebarState } from '../redux/slices/sidebarSlice';

const SidebarComponent = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectSidebarState);

  return (
    <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
      {/* Contenido del sidebar */}
      <button type="button" onClick={() => dispatch(toggleSidebar())}>Toggle Sidebar</button>
    </div>
  );
};

export default SidebarComponent;

import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    menuVisible: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuVisible = !state.menuVisible;
    },
  },
});

export const { toggleMenu } = navbarSlice.actions;
export default navbarSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const worksSlice = createSlice({
  name: 'works',
  initialState: {
    works: [],
  },
  reducers: {
    renderprojects: (state, action) => {
      state.works = action.payload;
    },
  },
});

export const { renderprojects } = worksSlice.actions;
export const selectWorks = (state) => state.works.works;
export default worksSlice.reducer;

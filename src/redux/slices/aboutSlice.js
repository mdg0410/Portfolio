import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    languajes: false,
    frameworks: false,
    skills: false,
  },
  reducers: {
    updateField: (state, action) => {
      const field = action.payload;
      state[field] = !state[field];
    },
  },
});

export const { updateField } = aboutSlice.actions;
export const selectAbout = (state) => state.about;
export default aboutSlice.reducer;

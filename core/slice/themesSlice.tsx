import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: string } = {
  value: "blue",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { updateTheme } = themeSlice.actions;

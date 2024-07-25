import { createSlice } from "@reduxjs/toolkit";

const nowMovies = createSlice({
  name: "nowMovies",
  initialState: {
    nowPlaying: null,
    pop: null,
    upcm: null,
  },
  reducers: {
    addnow: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addpop: (state, action) => {
      state.pop = action.payload;
    },
    addupcm: (state, action) => {
      state.upcm = action.payload;
    },
    removenow: (state) => {
      state.nowPlaying = null;
    },
  },
});

export const { addnow, removenow, addpop, addupcm } = nowMovies.actions;
export default nowMovies.reducer;

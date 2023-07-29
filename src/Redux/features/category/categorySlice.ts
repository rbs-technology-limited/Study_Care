import { createSlice } from "@reduxjs/toolkit";

type INITIALSTATE = {
  categories: Array<any>;
  courseDetails: any;
};

const initialState = {
  categories: [],
  courseDetails: {},
} as INITIALSTATE;

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCourseDetails: (state, action) => {
      state.courseDetails = action.payload;
    },
  },
});

export const { setCategories, setCourseDetails } = categorySlice.actions;

export default categorySlice.reducer;

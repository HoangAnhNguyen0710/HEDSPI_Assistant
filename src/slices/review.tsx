import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = [];
export const reviewSlice = createSlice({
  name: "review",
  initialState: { value: initialStateValue },
  reducers: {
    setReviews: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;

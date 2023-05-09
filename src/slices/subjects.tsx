import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = [];
export const subjectSlice = createSlice({
  name: "subject",
  initialState: { value: initialStateValue },
  reducers: {
    setSubjects: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSubjects } = subjectSlice.actions;
export default subjectSlice.reducer;

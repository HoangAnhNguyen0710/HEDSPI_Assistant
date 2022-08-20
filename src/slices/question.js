import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = [];
export const questionSlice = createSlice({
  name: "question",
  initialState: { value: initialStateValue },
  reducers: {
    setQuestions: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setQuestions } = questionSlice.actions;
export default questionSlice.reducer;

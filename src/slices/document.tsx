import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = [];
export const documentSlice = createSlice({
  name: "document",
  initialState: { value: initialStateValue },
  reducers: {
    setDocs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDocs } = documentSlice.actions;
export default documentSlice.reducer;

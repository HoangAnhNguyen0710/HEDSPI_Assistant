import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./subjects";
import questionReducer from "./question";
import documentReducer from "./document";
import reviewReducer from "./review";
export const redux_store = configureStore({
  reducer: {
    subject: subjectReducer,
    question: questionReducer,
    document: documentReducer,
    review: reviewReducer,
  },
});

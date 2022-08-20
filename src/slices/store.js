import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from './subjects';
import questionReducer from './question';
export const redux_store = configureStore({
    reducer:{
        subject: subjectReducer, question: questionReducer
    }
})
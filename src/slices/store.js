import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from './subjects';
export const redux_store = configureStore({
    reducer:{
        subject: subjectReducer,
    }
})
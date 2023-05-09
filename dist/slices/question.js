"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setQuestions = exports.questionSlice = exports.initialStateValue = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialStateValue = [];
exports.questionSlice = (0, toolkit_1.createSlice)({
    name: "question",
    initialState: { value: exports.initialStateValue },
    reducers: {
        setQuestions: function (state, action) {
            state.value = action.payload;
        },
    },
});
exports.setQuestions = exports.questionSlice.actions.setQuestions;
exports.default = exports.questionSlice.reducer;

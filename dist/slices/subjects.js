"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSubjects = exports.subjectSlice = exports.initialStateValue = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialStateValue = [];
exports.subjectSlice = (0, toolkit_1.createSlice)({
    name: "subject",
    initialState: { value: exports.initialStateValue },
    reducers: {
        setSubjects: function (state, action) {
            state.value = action.payload;
        },
    },
});
exports.setSubjects = exports.subjectSlice.actions.setSubjects;
exports.default = exports.subjectSlice.reducer;

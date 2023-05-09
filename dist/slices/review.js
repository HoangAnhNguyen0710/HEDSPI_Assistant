"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setReviews = exports.reviewSlice = exports.initialStateValue = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialStateValue = [];
exports.reviewSlice = (0, toolkit_1.createSlice)({
    name: "review",
    initialState: { value: exports.initialStateValue },
    reducers: {
        setReviews: function (state, action) {
            state.value = action.payload;
        },
    },
});
exports.setReviews = exports.reviewSlice.actions.setReviews;
exports.default = exports.reviewSlice.reducer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDocs = exports.documentSlice = exports.initialStateValue = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialStateValue = [];
exports.documentSlice = (0, toolkit_1.createSlice)({
    name: "document",
    initialState: { value: exports.initialStateValue },
    reducers: {
        setDocs: function (state, action) {
            state.value = action.payload;
        },
    },
});
exports.setDocs = exports.documentSlice.actions.setDocs;
exports.default = exports.documentSlice.reducer;

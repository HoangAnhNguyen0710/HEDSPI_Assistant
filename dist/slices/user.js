"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUser = exports.userSlice = exports.initialStateValue = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialStateValue = null;
exports.userSlice = (0, toolkit_1.createSlice)({
    name: "user",
    initialState: { value: exports.initialStateValue },
    reducers: {
        setUser: function (state, action) {
            state.value = action.payload;
        },
    },
});
exports.setUser = exports.userSlice.actions.setUser;
exports.default = exports.userSlice.reducer;

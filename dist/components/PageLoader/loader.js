"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = __importDefault(require("react"));
var react_loader_spinner_1 = require("react-loader-spinner");
var Loader = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: "preloader", className: "w-full bg-white h-full fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center" },
            react_1.default.createElement(react_loader_spinner_1.MutatingDots, { color: "#06b6d4", height: 80, width: 80 }))));
};
exports.default = Loader;

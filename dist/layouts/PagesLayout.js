"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Footer_1 = __importDefault(require("./Footer"));
var NavBar_1 = __importDefault(require("./NavBar"));
var loader_1 = __importDefault(require("../components/PageLoader/loader"));
// import { NavLink } from "react-router-dom";
var PageLayout = function (props) {
    var loader = props.isLoader;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement("div", { className: "w-full font-sans" },
                react_1.default.createElement(NavBar_1.default, null),
                react_1.default.createElement("div", { className: "py-12 box-border" }),
                loader ? (react_1.default.createElement(loader_1.default, null)) : (react_1.default.createElement("div", { className: "sm:px-2 md:px-6 lg:px-10" }, props.page)),
                react_1.default.createElement(Footer_1.default, null)))));
};
exports.default = PageLayout;

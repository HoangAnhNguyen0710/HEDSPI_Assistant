"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
var ManagementPage = function () {
    var ManagementContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "min-h-screen py-20" },
            react_1.default.createElement("p", { className: "" }, "Management Page"))));
    return react_1.default.createElement(PagesLayout_1.default, { page: ManagementContent });
};
exports.default = ManagementPage;

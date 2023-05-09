"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Question_1 = __importDefault(require("./Question"));
var exports_1 = require("react-redux/es/exports");
var QuestionList = function () {
    var questionList = (0, exports_1.useSelector)(function (state) { return state.question.value; });
    return (react_1.default.createElement("div", { className: "flex w-full flex-wrap py-3" }, questionList.map(function (question) { return (react_1.default.createElement("div", { className: "w-full flex items-center justify-center lg:w-1/2 py-3 h-full", key: question.id },
        react_1.default.createElement(Question_1.default, { question: question }))); })));
};
exports.default = QuestionList;

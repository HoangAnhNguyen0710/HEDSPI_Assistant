"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redux_store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var subjects_1 = __importDefault(require("./subjects"));
var question_1 = __importDefault(require("./question"));
var document_1 = __importDefault(require("./document"));
var review_1 = __importDefault(require("./review"));
var user_1 = __importDefault(require("./user"));
exports.redux_store = (0, toolkit_1.configureStore)({
    reducer: {
        subject: subjects_1.default,
        question: question_1.default,
        document: document_1.default,
        review: review_1.default,
        user: user_1.default,
    },
});

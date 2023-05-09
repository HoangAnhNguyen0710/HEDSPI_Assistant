"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Review_1 = __importDefault(require("./Review"));
var ReviewList = function (props) {
    var reviewList = props.reviewList;
    return (react_1.default.createElement("div", { className: "flex w-full flex-wrap p-3" }, reviewList.map(function (review) {
        return react_1.default.createElement("div", { className: "w-full flex items-center justify-center", key: review.id },
            react_1.default.createElement(Review_1.default, { review: review }));
    })));
};
exports.default = ReviewList;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var DocumentImageDetail = function (props) {
    var image = props.image;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(material_1.Card, { sx: { p: 1, minHeight: "fit-content", display: "flex", alignItems: "center" }, variant: "outlined" },
            react_1.default.createElement("img", { src: image, alt: image.toString(), loading: "lazy", className: "w-full h-full rounded-md" }))));
};
exports.default = DocumentImageDetail;

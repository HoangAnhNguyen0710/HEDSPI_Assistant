"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var PagePagination = function (props) {
    var handlePageClick = function (e, value) {
        props.setPageNum(value);
    };
    return (react_1.default.createElement("div", { className: 'flex justify-center p-3 my-2' },
        react_1.default.createElement(material_1.Pagination, { count: Math.round(props.totalPage) < props.totalPage ? Math.round(props.totalPage) + 1 : Math.round(props.totalPage), page: props.currentPage, onChange: handlePageClick })));
};
exports.default = PagePagination;

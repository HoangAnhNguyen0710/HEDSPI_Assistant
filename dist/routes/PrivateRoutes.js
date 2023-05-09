"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var CreateDocumentPage_1 = __importDefault(require("../pages/CreateDocumentPage"));
var ManagementPage_1 = __importDefault(require("../pages/ManagementPage"));
var react_1 = __importDefault(require("react"));
var PrivateRoutes = function () {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/management", element: react_1.default.createElement(ManagementPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/create_docs", element: react_1.default.createElement(CreateDocumentPage_1.default, null) })));
};
exports.default = PrivateRoutes;

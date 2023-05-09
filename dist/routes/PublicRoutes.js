"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var AboutUsPage_1 = __importDefault(require("../pages/AboutUsPage"));
var QAPage_1 = __importDefault(require("../pages/QAPage"));
var HomePage_1 = __importDefault(require("../pages/HomePage"));
var DocumentPage_1 = __importDefault(require("../pages/DocumentPage"));
var LoginPage_1 = __importDefault(require("../pages/LoginPage"));
var ReviewPage_1 = __importDefault(require("../pages/ReviewPage"));
var ExamPage_1 = __importDefault(require("../pages/ExamPage"));
var DocumentDetailPage_1 = __importDefault(require("../pages/DocumentDetailPage"));
var SearchResultPage_1 = __importDefault(require("../pages/SearchResultPage"));
var react_1 = __importDefault(require("react"));
var PublicRoutes = function () {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(HomePage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/documents", element: react_1.default.createElement(DocumentPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/search_result", element: react_1.default.createElement(SearchResultPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/documents/exams", element: react_1.default.createElement(ExamPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/documents/:id", element: react_1.default.createElement(DocumentDetailPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(AboutUsPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/questions", element: react_1.default.createElement(QAPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/reviews", element: react_1.default.createElement(ReviewPage_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(LoginPage_1.default, null) })));
};
exports.default = PublicRoutes;

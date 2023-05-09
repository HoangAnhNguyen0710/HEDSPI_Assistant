"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Document_1 = __importDefault(require("../components/Document"));
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
var api_1 = require("../services/api");
var Doraemon = require("../assets/img/mon.png");
var SearchResultPage = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var queryString = location.search;
    var _a = (0, react_1.useState)(true), isLoader = _a[0], setIsLoader = _a[1];
    var _b = (0, react_1.useState)(""), errMSG = _b[0], setErrMSG = _b[1];
    var _c = (0, react_1.useState)(null), resultList = _c[0], setResultList = _c[1];
    var params = new URLSearchParams(queryString);
    // console.log(params.get('document'))
    (0, react_1.useEffect)(function () {
        (0, api_1.getSearchDocument)(params.get("document"))
            .then(function (res) {
            setResultList(res.data);
            setIsLoader(false);
        })
            .catch(function (err) {
            console.log(err);
            setErrMSG(err.response.data);
            setIsLoader(false);
        });
    }, []);
    (0, react_1.useEffect)(function () {
        console.log(resultList);
    }, [resultList]);
    var SearchResult = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "h-fit py-16 px-10 w-full" },
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full pb-6" }, resultList === null ? (react_1.default.createElement("div", { className: "flex flex-col w-full h-screen items-center" },
                react_1.default.createElement("span", { className: "uppercase font-semibold text-2xl" }, errMSG),
                react_1.default.createElement("div", { className: "md:w-1/2" },
                    react_1.default.createElement("img", { src: Doraemon, alt: "Doraemon", className: "w-full p-3" })))) : (react_1.default.createElement("div", { className: "flex flex-col w-full" },
                react_1.default.createElement("span", { className: "uppercase font-semibold text-2xl pb-4 px-8" },
                    "search result for: ",
                    params.get("document")),
                react_1.default.createElement("div", { className: "flex flex-wrap" }, resultList.map(function (document) { return (react_1.default.createElement("div", { key: document.id, className: "w-full md:w-1/2 hover:scale-105 transition ease-in-out delay-150 duration-200" },
                    react_1.default.createElement("div", { className: "p-2 m-2" },
                        react_1.default.createElement(Document_1.default, { document: document })))); }))))))));
    return react_1.default.createElement(PagesLayout_1.default, { page: SearchResult, isLoader: isLoader });
};
exports.default = SearchResultPage;
